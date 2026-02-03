## 2026-02-03 - Security Headers Implementation
**Vulnerability:** Missing HTTP Security Headers (X-Frame-Options, HSTS, etc.)
**Learning:** Next.js requires explicit configuration in `next.config.ts` headers() function to serve security headers.
**Prevention:** Use a standard set of security headers for all Next.js projects to prevent common attacks like clickjacking and MIME sniffing.
