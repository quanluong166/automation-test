# Playwright TypeScript Automation Structure

Automation project skeleton for SauceDemo using Playwright + TypeScript.

## Setup

1. Install dependencies:
   - `npm install`
2. Install Playwright browsers:
   - `npx playwright install`
3. Create env file:
   - `cp .env.example .env`

## Run

- All tests: `npm test`
- Smoke only: `npm run test:smoke`
- Regression only: `npm run test:regression`
- Headed mode: `npm run test:headed`
- HTML report: `npm run report`

## Structure

- `src/pages`: page objects and reusable components
- `src/fixtures`: custom Playwright fixtures
- `src/constants`: URLs and users
- `src/utils`: helper functions
- `tests/e2e`: spec files grouped by domain
- `tests/data`: test data objects
- `docs/testing`: test case and strategy docs

