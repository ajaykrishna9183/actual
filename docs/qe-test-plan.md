# QE Take Home Exercise - Test Plan

## Project

Actual Budget - Personal Finance Application

## Objective

The objective of this test plan is to validate important end-to-end workflows in the Actual Budget application using Playwright.

## Scope

The E2E tests cover two core user workflows:

1. Creating a local account with an opening balance
2. Creating a rule and validating automatic transaction categorization

## Out of Scope

- Bank sync integration
- Mobile browser testing
- Performance testing
- Visual regression testing
- API-only validation
- Real server configuration

## Test Environment

- Application: Actual Budget
- Test Type: End-to-End UI Automation
- Framework: Playwright
- Browser: Chromium
- Test Data: Test Budget file created inside the application
- Execution: Local machine

## Feature 1: Account Creation

### TC-01: Create a local account with opening balance

**Precondition:**
The user has opened the Actual Budget app and created a test file.

**Steps:**

1. Open the Actual Budget application.
2. Create a test file.
3. Click Add account.
4. Choose to create a local account.
5. Enter account name as `QE Checking`.
6. Enter opening balance as `250`.
7. Save the account.

**Expected Result:**

- A new account named `QE Checking` should be created.
- The account should be visible in the sidebar.
- The account page should display the created account.
- A starting balance transaction should be created.

### TC-02: Verify starting balance transaction

**Steps:**

1. Open the created account.
2. Check the first transaction row.

**Expected Result:**

- Payee should be `Starting Balance`.
- Category should be `Starting Balances`.
- Credit amount should be `250.00`.
- Debit amount should be empty.

## Feature 2: Rule Creation and Automatic Categorization

### TC-03: Create a rule for payee-based categorization

**Precondition:**
The user is inside a test budget file.

**Steps:**

1. Navigate to the Rules page.
2. Create a new rule.
3. Set the condition as `payee is Fast Internet`.
4. Set the action as `set category General`.
5. Save the rule.

**Expected Result:**

- The rule should be saved successfully.
- The rule list should display the condition and action.

### TC-04: Validate that the rule is applied to a matching transaction

**Steps:**

1. Navigate to an existing account, for example `HSBC`.
2. Add a new transaction.
3. Enter payee as `Fast Internet`.
4. Enter debit amount as `12.34`.
5. Save the transaction.

**Expected Result:**

- The transaction should be created.
- The payee should be `Fast Internet`.
- The category should automatically become `General`.
- The debit amount should be `12.34`.

## Test Design Approach

The tests are designed to validate real user behavior through the UI. Existing Playwright page models are reused wherever possible to improve maintainability and reduce brittle selectors.

## Risks and Mitigation

| Risk | Mitigation |
|---|---|
| UI elements may load slowly | Use Playwright assertions and locators instead of fixed waits |
| Test data may conflict between runs | Create a fresh test file before each test |
| UI labels may change | Prefer existing page models and role-based selectors |
| Browser state may affect tests | Use isolated browser page per test |

## Execution Commands

Run tests in headless mode:

```bash
yarn workspace @actual-app/web run playwright test qe-takehome.test.ts