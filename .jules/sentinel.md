# Sentinel's Journal

## 2024-05-22 - Security Headers Enhancement
**Vulnerability:** The application was missing Content Security Policy (CSP), X-Permitted-Cross-Domain-Policies, and X-XSS-Protection headers.
**Learning:** While Next.js provides some security headers by default (like X-Frame-Options), it does not enforce a Content Security Policy or other hardening headers out of the box because they can break application functionality if not carefully configured.
**Prevention:** Always implement a strict Content Security Policy and other security headers (X-XSS-Protection, X-Permitted-Cross-Domain-Policies) in `next.config.ts` or middleware to reduce the attack surface against XSS and other injection attacks.Regularly audit and update these headers as the application evolves.

## 2024-05-22 - Dynamic Content Security Policy
**Vulnerability:** The static Content Security Policy included `unsafe-eval` unconditionally, exposing the application to potential XSS/RCE risks in production.
**Learning:** `unsafe-eval` is often required for development tools (like HMR) but dangerous in production. Next.js `next.config.ts` allows dynamic configuration based on `process.env.NODE_ENV`.
**Prevention:** Use `process.env.NODE_ENV` to conditionally include development-only CSP directives like `unsafe-eval`.
