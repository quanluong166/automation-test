# Test Strategy (Playwright + TypeScript)

## Scope

- UI functional flows for SauceDemo web app
- Web-only E2E (desktop first)
- Focus on deterministic assertions and reusable fixtures

## Exclusions (Initial Phase)

- Cross-browser visual diff baselines
- Performance/load benchmarking
- API-only contract testing

## Test Layers

- Smoke (`@smoke`, P0): run on every PR
- Regression (`@regression`, P0/P1): run nightly
- Extended (`@extended`, P2): run on demand

## Suggested Folder Mapping

- `tests/e2e/auth/*.spec.ts`
- `tests/e2e/inventory/*.spec.ts`
- `tests/e2e/cart/*.spec.ts`
- `tests/e2e/checkout/*.spec.ts`
- `tests/e2e/navigation/*.spec.ts`

## Data Strategy

- Use static users from SauceDemo docs:
  - `standard_user`
  - `locked_out_user`
  - `problem_user`
  - `performance_glitch_user`
- Keep secrets in `.env` for real projects, but use demo defaults here

## Stability Rules

- Use `data-test` selectors only
- Avoid unnecessary waits; prefer web-first assertions
- Keep tests independent (new context per test unless explicitly optimized)
- Add helper for login and cart seeding

## CI Recommendations

- PR: run `@smoke`
- Nightly: run `@regression`
- On-demand: run full suite with traces/videos on failure

