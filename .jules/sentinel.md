# Sentinel's Journal

## 2024-05-22 - Security Headers Enhancement
**Vulnerability:** The application was missing Content Security Policy (CSP), X-Permitted-Cross-Domain-Policies, and X-XSS-Protection headers.
**Learning:** While Next.js provides some security headers by default (like X-Frame-Options), it does not enforce a Content Security Policy or other hardening headers out of the box because they can break application functionality if not carefully configured.
**Prevention:** Always implement a strict Content Security Policy and other security headers (X-XSS-Protection, X-Permitted-Cross-Domain-Policies) in `next.config.ts` or middleware to reduce the attack surface against XSS and other injection attacks.Regularly audit and update these headers as the application evolves.
