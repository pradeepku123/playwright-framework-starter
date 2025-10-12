## Login Test Plan

### Executive summary
This test plan covers functional, validation, security, accessibility, and basic performance checks for the application's login feature. Tests are designed to be executed manually or automated with Playwright (recommended for this repository). Each scenario includes a clear starting state, step-by-step instructions, expected outcomes, and success/failure criteria.

### Scope
- Pages covered: Login page and immediate post-login landing (dashboard/home).
- Flows: successful login, failure modes, input validation, session persistence ("remember me"), logout, forgot-password navigation, and basic security checks (XSS, injection, brute-force protection).
- Exclusions: full email delivery verification (password reset emails) — verify messaging only unless test mail sink is available.

### Assumptions & starting state
- Test environment URL: http://localhost:3000
- Tests start from a fresh browser profile (no cookies/localStorage).
- Test accounts (seeded in test env or provided via fixtures):
  - valid: test.user@example.com / TestPass123!
  - locked: locked.user@example.com / TestPass123!
  - nonexistent: no.user@example.com
- Playwright is available in repo (this repository uses Playwright per context). Tests will use Playwright test runner unless otherwise specified.
- Use `data-test` or `data-testid` attributes for stable selectors where possible.

### Success criteria
- Valid credentials log the user in and reach the expected landing page.
- Invalid attempts show safe, non-revealing errors and do not create sessions.
- UI validation prevents empty or malformed input where appropriate.
- Session tokens/cookies are created/cleared per expected behavior (remember-me vs normal session).
- No client-side XSS or script execution from malicious inputs.
- Basic accessibility barriers (labels, keyboard nav, error announcements) are addressed for P0 flows.

---

## Test data & fixtures
Place credentials and environment-sensitive values in fixtures or environment variables — do not commit secrets.

Suggested fixture (Playwright / test fixtures):
- `fixtures/credentials.json` (or Playwright test fixtures):
  - valid.email = `test.user@example.com`
  - valid.password = `TestPass123!`
  - locked.email = `locked.user@example.com`
  - nonexistent.email = `no.user@example.com`

---

## Primary user journeys (critical paths)
1. Login (happy path) — user authenticates and lands on dashboard.
2. Login (invalid credentials) — user receives generic failure message.
3. Forgot password — link navigates to recovery page and displays neutral messaging.
4. Remember me — session persists across browser restart when enabled.
5. Logout — session cleared and protected routes redirect to login.

---

## Detailed scenarios

Each scenario includes:
- Title
- Starting state / assumptions
- Steps (numbered)
- Expected results
- Success criteria / failure conditions

### 1. Happy path — Successful login
Starting state: fresh browser; valid user exists.

Steps:
1. Open `http://localhost:3000` and navigate to `/login`.
2. Verify form elements: email, password, Login button, optional "Remember me", "Forgot password".
3. Enter valid email and password.
4. Click Login or press Enter.
5. Wait for navigation to the authenticated landing page (e.g., `/dashboard`).

Expected results:
- A loading indicator (if present) appears during submit.
- Redirect to the app's authorized landing page within acceptable time (smoke threshold: <2s).
- Authenticated UI elements visible (user name/avatar, Logout button).
- An authentication token/cookie or session entry is created as per app spec.

Success criteria:
- Redirect and authenticated UI elements are present; token/cookie is stored.
Failure:
- Remains on login page with error, or server returns 5xx.

---

### 2. Wrong password
Starting state: fresh browser; valid user exists.

Steps:
1. Navigate to `/login`.
2. Enter valid email and an incorrect password.
3. Submit.

Expected results:
- Generic error message displayed (e.g., "Invalid username or password").
- No session token/cookie is created.
- No stack traces or sensitive server info shown.

Success criteria:
- Generic error and no authentication created.
Failure:
- Error reveals whether the username exists or shows stack trace.

---

### 3. Non-existent user
Starting state: fresh browser.

Steps:
1. Navigate to `/login`.
2. Use a non-existent email and any password.
3. Submit.

Expected results:
- Same generic error message as other failures.
- No session created; no account enumeration.

Success criteria:
- No sensitive info leaked.## Example Playwright run commands
Run all tests:
```bash
npx playwright test

---

### 4. Locked / disabled account
Starting state: test account that is locked/disabled.

Steps:
1. Navigate to `/login`.
2. Enter locked account credentials and submit.

Expected results:
- A message indicates account is locked or next steps to re-enable (contact support).
- No authentication token is issued.

Success criteria:
- Clear messaging for locked accounts without leaking internal logic.

---

### 5. Empty fields / client-side validation
Starting state: fresh browser.

Steps:
1. Navigate to `/login`.
2. Leave email and/or password blank.
3. Click Login.

Expected results:
- Client-side validation errors appear near inputs (e.g., "Email is required").
- Keyboard Enter triggers validation similarly.
- If client-side prevents submission, no network request should be sent (observable via network tab or intercepted requests).

Success criteria:
- Proper inline validation and focus management to the first invalid field.

---

### 6. Input sanitization / injection attempts (security)
Starting state: fresh browser.

Steps:
1. Navigate to `/login`.
2. Enter script-like payloads into fields (examples: `<script>alert(1)</script>`, `' OR '1'='1`).
3. Submit.

Expected results:
- No script execution in the browser (no alerts triggered).
- Server handles inputs safely; returns generic auth error if invalid.
- No input-caused crashes or stack traces visible.

Success criteria:
- No XSS or injection is observed.

---

### 7. Long input / boundary testing
Starting state: fresh browser.

Steps:
1. Navigate to `/login`.
2. Enter extremely long values for email or password (e.g., 10k chars).
3. Submit.

Expected results:
- Client or server rejects with a safe validation message (e.g., 400).
- App doesn't crash or display stack traces.

Success criteria:
- Graceful handling of large inputs.

---

### 8. Remember me / persistent session
Starting state: fresh browser.

Steps:
1. Navigate to `/login`.
2. Enter valid credentials and check "Remember me".
3. Submit and verify successful login.
4. Close and restart browser (or open a new persistent browser context) and revisit app.

Expected results:
- User remains logged in if remember-me is implemented.
- Token/cookie persists with appropriate expiry.

Success criteria:
- Session persists when remember-me is on; does not persist otherwise.

---

### 9. Logout flow
Starting state: user is logged in.

Steps:
1. Click "Logout".
2. Verify redirect to `/login`.
3. Attempt to access a protected route; expect redirect to login.

Expected results:
- Session token/cookie removed.
- Protected routes require authentication.

Success criteria:
- Session cleared and routes guarded.

---

### 10. Forgot password navigation & messaging
Starting state: fresh browser.

Steps:
1. On `/login`, click "Forgot password".
2. Verify navigation to recovery page.
3. Submit a known and an unknown email.

Expected results:
- Neutral message like "If that email exists, we'll send reset instructions".
- No account enumeration.

Success criteria:
- Link works and messaging is safe.

---

### 11. Rate limiting / brute-force protection (safety/security)
Starting state: fresh browser.

Steps:
1. From a test client, perform several rapid failed logins (e.g., 10).
2. Observe server responses.

Expected results:
- After threshold, server applies throttling (429) or introduces additional verification (captcha/delay).
- No sensitive info revealed.

Success criteria:
- Brute-force protections trigger per policy.

Note: Run this test carefully — it can affect shared test environments.

---

### 12. Accessibility (A11y) checks
Starting state: fresh browser.

Steps:
1. Inspect the login page using axe-core (or Playwright accessibility snapshot).
2. Verify form fields have associated labels, proper ARIA attributes, and error messages are accessible (aria-describedby / aria-live).
3. Ensure keyboard-only navigation (Tab order, Enter to submit) works.

Expected results:
- No critical accessibility violations for P0 flows.
- Errors are announced for screen readers.

Success criteria:
- Login page meets WCAG A/AA for critical flows.

---

### 13. API-level login tests (if applicable)
Starting state: test environment API accessible.

Steps:
1. Send a POST to the login API with valid credentials.
2. Inspect status codes, response body (token), and headers.
3. Send with invalid credentials and verify 401/403 and safe messaging.

Expected results:
- Success returns 200 with token (JWT or session info) and expected claims/expiry.
- Failures return appropriate status codes and no sensitive content.

Success criteria:
- API conforms to auth contract and does not leak sensitive data.

---

## Automation mapping (Playwright recommended)
- Suggested test files:
  - `tests/ui/login.spec.ts` — Happy path + negative cases + basic a11y.
  - `tests/ui/login.remember.spec.ts` — Remember me and persistence checks.
  - `tests/ui/login.security.spec.ts` — XSS/injection and long-input tests.
  - `tests/api/login-api.spec.ts` — API-level assertions.

- Page object:
  - Reuse existing `pages/login.page.ts` for selectors and actions. If missing, create one that exposes:
    - `goto()`, `fillEmail()`, `fillPassword()`, `toggleRememberMe()`, `submit()`, `expectError()`, `expectLoggedIn()`.

- Test fixtures:
  - Centralize credentials and test account setup in Playwright fixtures or `config/env.config.ts`. Use environment variables for secrets.

---

## Example Playwright run commands
Run all tests:
```bash
npx playwright test