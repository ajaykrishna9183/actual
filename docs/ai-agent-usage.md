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

Suggest important E2E workflows for a personal finance application that are suitable for Playwright end-to-end testing.

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

## Prompt 5: Test Reliability Review

### Prompt

Review the Playwright test approach for reliability and maintainability. Check whether the tests avoid brittle selectors, fixed waits, shared state, and unclear assertions.

### Result

The tests were structured to use existing page models, create a fresh test file during setup, avoid fixed waits, and validate meaningful business outcomes instead of only checking page navigation.
