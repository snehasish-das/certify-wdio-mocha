# Certify WebdriverIO Tests

Certify is a TypeScript end-to-end automation framework for 247.ai web products. It uses WebdriverIO with the Mocha test framework to run Chrome-based UI tests, with shared page objects, test data, and resource helpers organized by product area.

The default configuration runs tests in parallel where possible and produces Spec, Allure, JUnit, and JSON results. Failed tests also capture screenshots. A serial configuration is available for suites that need one worker at a time.

## Stack

- TypeScript compiled at runtime with `ts-node`
- WebdriverIO 7 and the local ChromeDriver service
- Mocha with Chai assertions
- Allure, JUnit, JSON, and console reporters
- `supertest` and supporting utilities for API-assisted test flows

## Repository Layout

| Path | Purpose |
| --- | --- |
| `tests/` | Mocha specs grouped into component, integration, and smoke tests |
| `pages/` | Page objects and feature-specific UI helpers |
| `resources/` | Locators and reusable test data |
| `config/` | Shared environment and user configuration |
| `wdio.conf.ts` | Main WebdriverIO configuration |
| `wdio.conf_serial.ts` | Single-worker WebdriverIO configuration |
| `allure-results/` | Raw Allure result files |
| `allure-report/` | Generated Allure report |
| `junitReports/` | JUnit XML output |
| `jsonResults/` | JSON reporter output |

## Prerequisites

- Node.js and npm compatible with the dependencies in `package.json`
- Google Chrome installed locally
- Network access to the environment under test and any required internal services
- Access to the test accounts and environment URLs used by the selected specs

Install dependencies from the repository root:

```bash
npm install
```

The configured ChromeDriver service starts Chrome in headless mode on port `9000`. The test runner uses a default wait timeout of 120 seconds and a Mocha timeout of 180 seconds.

## Running Tests

Run the default `assist` suite:

```bash
npm test
```

Run all specs discovered by the main configuration:

```bash
npm run run
```

Run the smoke suite:

```bash
npm run smoke
```

Run a configured suite directly:

```bash
npx wdio run wdio.conf.ts --suite carddesigner
```

Available suites currently include `assist`, `answers`, `carddesigner`, `conversations`, `openchannel`, `mss`, `voiceportal`, `cob`, `butterfly`, and `smoke`.

Run one or more specs:

```bash
npx wdio run wdio.conf.ts --spec ./tests/component/carddesigner/PaymentCardTests.ts

npx wdio run wdio.conf.ts \
	--spec ./tests/integration/openchannel/OpenChannel.ts \
	--spec ./tests/component/carddesigner/PaymentCardTests.ts
```

For a single-worker run, use the serial configuration explicitly:

```bash
npx wdio run wdio.conf_serial.ts --suite carddesigner
```

## Environment Variables

Set environment-specific values in the shell rather than committing them to the repository. For example:

```bash
HOME_URL=https://staging.example.com/home \
	npx wdio run wdio.conf.ts --spec ./tests/component/carddesigner/PaymentCardTests.ts
```

The feature-specific URLs are supplied through variables such as `REST_BASE_URL`, `ASSIST_CONSOLE`, `VOICE_HOME`, `OKTA_APPLICATION_URL`, and `ASSIST_CONSOLE_TEMPLATE`. The template used by the COB client test should contain `{client}` where the tenant name belongs.

When `BUILD_NUMBER` is set, the configured `afterTest` hook also attempts to update the test case management system and create a Jira defect for failed tests. This CI integration requires the corresponding Jenkins metadata, network access, and service credentials; use the repository's approved CI secret mechanism for those values.

## Reports

The main configuration writes results to these directories:

- `allure-results/`: raw Allure data; the run hook also generates `allure-report/`
- `junitReports/`: JUnit XML for CI collection
- `jsonResults/`: JSON test results
- `screenshots/`: screenshots captured for failed tests

Open the generated Allure report locally with:

```bash
allure open allure-report
```

To regenerate it manually from raw results:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

## Package Scripts

| Command | Equivalent action |
| --- | --- |
| `npm test` | Run the `assist` suite |
| `npm run run` | Run all specs with `wdio.conf.ts` |
| `npm run smoke` | Run the `smoke` suite |
| `npm run generateMochawesome` | Run the legacy Mochawesome command configured in `package.json` |

The `generateMochawesome` script references `path/to/results.json`; use the Allure workflow above for the reporters currently enabled by WebdriverIO.

## Updating Dependencies

Review available updates before changing versions:

```bash
npx ncu
npx ncu -u
npm install
```

Run a focused suite after dependency changes and review generated report output before opening a pull request.

## Adding Tests

1. Place the spec in the relevant `tests/component`, `tests/integration`, or `tests/smoke` area.
2. Add or update the corresponding page object under `pages/` and reusable data under `resources/` when needed.
3. Add the spec path to a named suite in `wdio.conf.ts` if it should be runnable as a group.
4. Run the focused spec locally, then run the relevant suite before submitting the change.