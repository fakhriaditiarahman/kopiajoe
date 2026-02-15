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
