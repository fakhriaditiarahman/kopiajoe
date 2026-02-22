import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Note: Next.js 16+ renames middleware to proxy. This file replaces middleware.ts.
export function proxy(request: NextRequest) {
  const nonce = crypto.randomUUID()

  // Script-src:
  // - 'self': Fallback for older browsers
  // - 'nonce-...': Allows specific scripts with correct nonce
  // - 'strict-dynamic': Trusts scripts loaded by trusted scripts (Next.js)
  // - 'unsafe-inline': Fallback for older browsers (ignored by modern ones due to strict-dynamic)
  // - 'unsafe-eval': Only in development for Hot Module Replacement
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    "'unsafe-inline'",
    process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ""
  ].filter(Boolean).join(' ')

  const cspHeader = `
    default-src 'self';
    script-src ${scriptSrc};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', cspHeader)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set('Content-Security-Policy', cspHeader)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
