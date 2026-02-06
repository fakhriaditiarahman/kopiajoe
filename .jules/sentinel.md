## 2026-02-02 - Verifying Next.js Security Headers
**Vulnerability:** N/A (Enhancement)
**Learning:** next.config.ts headers can be verified programmatically using a script with tsx that imports the config and asserts the headers are present. This avoids manual inspection and ensures headers are applied.
**Prevention:** Use automated verification scripts for infrastructure-as-code or config files.
