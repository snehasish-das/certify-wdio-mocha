# Certify Test Automation Platform

## Executive Summary

Certify is a TypeScript-based end-to-end test automation platform built with WebdriverIO and Mocha. It validates web applications across multiple product areas through reusable page objects, shared locators, test data, API helpers, browser automation, and CI reporting.

The platform is designed to support repeatable release validation. The same automated suites can be executed against different environments by supplying environment-specific URLs and credentials outside the test code.

## Current Automation Scope

- 43 component test files
- 1 integration test area
- 2 smoke test files
- 50 reusable page objects
- 52 locator and test-data resources
- Product-focused suites for Assist, Answers, Card Designer, Conversations, Open Channel, Messaging, Voice Portal, COB, Butterfly, and Smoke testing

## Release Validation Model

Certify supports a progressive release-testing workflow:

1. **Smoke validation** verifies the most critical workflows after deployment.
2. **Targeted feature validation** checks the product area changed in the release.
3. **Component and integration regression** validates broader functional behavior.
4. **Serial reruns** provide deterministic execution for tests that require one worker.
5. **Report review** compares pass rates, failures, duration, screenshots, and linked defects with previous releases.

Common execution commands include:

```bash
npm run smoke
npx wdio run wdio.conf.ts --suite carddesigner
npm run run
npx wdio run wdio.conf_serial.ts --suite <suite>
```

## Platform Architecture

### Browser Automation

WebdriverIO controls Chrome through the local ChromeDriver service. The primary configuration supports parallel execution, while the serial configuration supports controlled single-worker execution.

### Reusable Test Design

The framework separates test intent from UI implementation through:

- Page objects in `pages/`
- Locators and reusable selectors in `resources/locators/`
- Test data and user configuration in `resources/` and `config/`
- Component, integration, and smoke specifications in `tests/`

This structure reduces duplication and makes changes to application screens easier to maintain.

### Environment Configuration

Environment-specific targets are injected through variables consumed by [config/environment.ts](config/environment.ts). This allows the same test assets to validate different release environments without modifying test logic.

## Integrations

### CI/CD and Jenkins

The Jenkins example in [SampleJenkinsFile.txt](SampleJenkinsFile.txt) demonstrates:

- Repository checkout using configurable credentials
- Containerized Node.js execution
- Dependency installation
- Xvfb support for browser-based CI execution
- Build timeouts
- Parameterized environment selection
- Automated test execution
- Allure report publication

### Test Reporting

Each run can produce several complementary result types:

- **Spec reporter:** live console feedback for engineers
- **Allure:** interactive release-level analysis and history
- **JUnit:** CI-compatible XML for dashboards and quality gates
- **JSON:** machine-readable results for downstream processing
- **Screenshots:** failure evidence captured by the test hooks

### Test Case Management

When configured with CI metadata and service endpoints, the WebdriverIO `afterTest` hook can update test execution status in a test case management system. This supports traceability from an automated test to a specific release build and test run.

### Jira Defect Management

For configured CI failures, the framework can:

- Create a defect from the failed test context
- Include environment and error information
- Attach the failure screenshot
- Associate the defect with the relevant product
- Update the test case record with the defect identifier

These integrations are optional and should be enabled through secret-managed environment variables.

### LambdaTest

[test.conf.ts](test.conf.ts) contains a remote LambdaTest configuration for Messaging tests. It supports:

- Remote Chrome execution
- Tunnel-based access to protected environments
- Remote build names
- Retry and timeout settings
- Cloud execution capabilities

The configuration should use secret-managed credentials and current browser capabilities before being used in a shared release pipeline.

### API-Assisted Testing

The framework uses `supertest` for REST interactions that support UI workflows and backend validation. This enables test scenarios that combine browser actions with service-level setup or verification.

## Management Value

Certify provides a repeatable quality signal for every release by enabling teams to:

- Detect critical regressions early
- Validate changed features with focused suites
- Reuse the same tests across release environments
- Execute broader regression coverage in parallel
- Preserve evidence through reports and screenshots
- Link failed automation to build records and defects
- Track quality trends across releases
- Reduce manual validation effort for recurring workflows

## Recommended Release Dashboard Measures

For release-to-release comparison, management reporting can track:

- Smoke pass rate
- Overall regression pass rate
- Pass rate by product area
- New failures versus known failures
- Defects created from automation
- Defect reopen rate
- Execution duration
- Flaky or retried tests
- Test coverage added or removed per release
- Release-blocking failures and their resolution status

## Operational Considerations

- Environment URLs should remain outside source code and be supplied through deployment configuration.
- Credentials must be stored in a secrets manager or CI credential store, not in test files.
- Generated reports should be retained according to the release evidence policy.
- The local ChromeDriver version must remain compatible with the operating system and installed Chrome version.
- The LambdaTest configuration should be reviewed before cloud execution because it is an optional, specialized configuration.
- Release orchestration, version tagging, and historical dashboarding are provided by the surrounding CI/CD platform rather than by Certify itself.

## Key Project Files

| File or directory | Management relevance |
| --- | --- |
| `wdio.conf.ts` | Main parallel test execution and reporting configuration |
| `wdio.conf_serial.ts` | Deterministic serial execution configuration |
| `test.conf.ts` | Optional LambdaTest cloud execution configuration |
| `config/environment.ts` | Release-environment target configuration |
| `tests/` | Automated functional coverage |
| `pages/` | Reusable application interaction layer |
| `resources/` | Locators and test data |
| `SampleJenkinsFile.txt` | CI/CD execution and report publication example |
| `README.md` | Developer setup and execution instructions |

## Summary

Certify is a reusable release-quality platform rather than a collection of isolated scripts. It combines UI automation, API-assisted workflows, parallel execution, cloud-browser support, structured reporting, CI integration, and optional test-management and defect traceability. With appropriate environment configuration and credential management, it can provide a consistent automated quality gate for successive product releases.
