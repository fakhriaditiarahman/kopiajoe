# Sentinel's Journal

## 2024-05-22 - Security Headers Enhancement
**Vulnerability:** The application was missing Content Security Policy (CSP), X-Permitted-Cross-Domain-Policies, and X-XSS-Protection headers.
**Learning:** While Next.js provides some security headers by default (like X-Frame-Options), it does not enforce a Content Security Policy or other hardening headers out of the box because they can break application functionality if not carefully configured.
**Prevention:** Always implement a strict Content Security Policy and other security headers (X-XSS-Protection, X-Permitted-Cross-Domain-Policies) in `next.config.ts` or middleware to reduce the attack surface against XSS and other injection attacks.Regularly audit and update these headers as the application evolves.

## 2025-02-08 - Content Security Policy Refinement
**Vulnerability:** The Content Security Policy allowed `'unsafe-eval'` in all environments, which increases the attack surface for XSS attacks if an attacker can inject script.
**Learning:** While `'unsafe-eval'` is often necessary for development tools (like webpack HMR), it is rarely needed in production for modern React applications. Removing it significantly hardens the application.
**Prevention:** Use environment checks (e.g., `process.env.NODE_ENV === 'development'`) to conditionally include relaxed CSP directives like `'unsafe-eval'` only when strictly necessary for development, enforcing a stricter policy in production.
