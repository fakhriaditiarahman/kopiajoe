# Sentinel's Journal

## 2024-05-22 - Security Headers Enhancement
**Vulnerability:** The application was missing Content Security Policy (CSP), X-Permitted-Cross-Domain-Policies, and X-XSS-Protection headers.
**Learning:** While Next.js provides some security headers by default (like X-Frame-Options), it does not enforce a Content Security Policy or other hardening headers out of the box because they can break application functionality if not carefully configured.
**Prevention:** Always implement a strict Content Security Policy and other security headers (X-XSS-Protection, X-Permitted-Cross-Domain-Policies) in `next.config.ts` or middleware to reduce the attack surface against XSS and other injection attacks.Regularly audit and update these headers as the application evolves.

## 2024-05-22 - Dynamic Content Security Policy
**Vulnerability:** The static Content Security Policy included `unsafe-eval` unconditionally, exposing the application to potential XSS/RCE risks in production.
**Learning:** `unsafe-eval` is often required for development tools (like HMR) but dangerous in production. Next.js `next.config.ts` allows dynamic configuration based on `process.env.NODE_ENV`.
**Prevention:** Use `process.env.NODE_ENV` to conditionally include development-only CSP directives like `unsafe-eval`.

## 2026-02-11 - Permissions Policy Hardening
**Vulnerability:** The `Permissions-Policy` header was overly permissive, only restricting a few features (`camera`, `microphone`, etc.) while leaving others potentially enabled by default or for cross-origin iframes.
**Learning:** `Permissions-Policy` (formerly Feature Policy) allows site owners to enable or disable powerful browser features. Explicitly disabling unused features like `payment`, `usb`, and `magnetometer` reduces the attack surface and potential for abuse if a component is compromised or via third-party scripts.
**Prevention:** Regularly audit and expand the `Permissions-Policy` header to explicitly deny all features that are not strictly required by the application.

## 2026-03-02 - Cross-Origin Isolation Headers
**Vulnerability:** The application was missing `Cross-Origin-Opener-Policy` (COOP) and `Cross-Origin-Resource-Policy` (CORP) headers, potentially exposing it to cross-window attacks (like Spectre) and resource leaks.
**Learning:** `COOP: same-origin` is the most secure but breaks OAuth popups. `same-origin-allow-popups` is a safer default that preserves popup functionality while still isolating the document. `CORP: same-origin` prevents other origins from embedding resources, reducing the risk of data leaks.
**Prevention:** Always implement `COOP` and `CORP` headers in `next.config.ts` to harden the application against cross-origin attacks.

## 2026-02-17 - Next.js App Router Middleware & Server Actions
**Vulnerability:** A middleware was added to restrict HTTP methods to GET and HEAD on all page routes, assuming a static site.
**Learning:** Next.js App Router Server Actions rely on `POST` requests to the current page URL. Blocking `POST` in middleware breaks all Server Actions and potentially other Next.js internal mechanisms (like revalidation) that use POST, even if no explicit API routes exist.
**Prevention:** Avoid blanket blocking of POST requests in middleware for Next.js applications unless you explicitly exclude Server Action paths or handle them correctly. Instead, rely on Next.js's built-in routing or use more targeted restrictions.

## 2026-02-17 - DNS Prefetch Control for Privacy
**Vulnerability:** The application had `X-DNS-Prefetch-Control` set to `on` (default), potentially allowing browsers to leak user intent via proactive DNS lookups.
**Learning:** While DNS prefetching improves performance, it can leak information about user browsing habits and open up timing side-channels. For strict privacy, explicit control is needed.
**Prevention:** Set `X-DNS-Prefetch-Control: off` in `next.config.ts` to disable proactive DNS resolution and prioritize user privacy.

## 2026-04-01 - CSP with Next.js Proxy (formerly Middleware)
**Vulnerability:** The static CSP in `next.config.ts` relied on `'unsafe-inline'` for scripts, exposing the app to XSS risks.
**Learning:** To implement a strict CSP with nonce support for App Router, we must use Edge Middleware (now renamed to `proxy` in Next.js 16+). The `middleware.ts` file convention is deprecated in favor of `proxy.ts`, and the export must be named `proxy`.
**Prevention:** Use `src/proxy.ts` to generate nonces and set dynamic CSP headers, allowing the removal of `'unsafe-inline'` from `script-src`. Ensure `style-src` retains `'unsafe-inline'` if using libraries like Framer Motion that inject styles at runtime.

## 2026-02-21 - Strict CSP with Next.js App Router Nonce
**Vulnerability:** The CSP implementation in `src/proxy.ts` generated a nonce but did not include it in the `script-src` directive, falling back to `'unsafe-inline'`, which is weak against XSS.
**Learning:** Next.js App Router automatically injects nonces into scripts and preload links if the `x-nonce` header is present in the request. To leverage this, the CSP header must explicitly include `'nonce-${nonce}'` and ideally `'strict-dynamic'`. `'strict-dynamic'` allows modern browsers to execute trusted scripts while ignoring `'unsafe-inline'` and `'self'`, providing robust protection.
**Prevention:** Update `src/proxy.ts` to include `'nonce-${nonce}'` and `'strict-dynamic'` in the `Content-Security-Policy` header. Ensure `x-nonce` is also set in the request headers so Next.js can pick it up.
