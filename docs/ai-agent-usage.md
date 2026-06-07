# AI Agent Usage

## Purpose

AI assistance was used to understand the assignment, explore the Actual Budget project structure, select E2E scenarios, create the test plan, design Playwright tests, and debug local setup issues.

## Prompt 1: Understanding the Assignment

### Prompt

Review the QE take-home assignment and explain the expected deliverables.

### Result

The assignment requires setting up the Actual Budget application locally, identifying one or two main features for E2E testing, creating a test plan, implementing Playwright tests, and documenting AI usage.

## Prompt 2: Selecting E2E Features

### Prompt

Suggest important E2E workflows for a personal finance application.

### Result

The selected workflows were account creation with opening balance and rule-based transaction categorization because they represent real user behavior and important business functionality.

## Prompt 3: Playwright Test Design

### Prompt

Help design Playwright E2E tests using existing page models in the project.

### Result

The tests were designed to create a fresh test file, create a local account, verify the starting balance transaction, create a rule, add a matching transaction, and verify automatic categorization.

## Prompt 4: Debugging Local Setup

### Prompt

The Actual app fails on Windows with `spawn yarn ENOENT`. Help debug the issue.

### Result

The issue was related to spawning Yarn on Windows. A Windows-compatible adjustment was added in `vite.config.mts` so the local development server could start successfully.

## Prompt 5: Test Execution

### Prompt

The Playwright tests are passing in headless mode, but I want to see browser execution. How can I run the tests visibly?

### Result

The tests were executed in headed mode using Playwright's `--headed` option, which confirmed that the browser workflow runs successfully.