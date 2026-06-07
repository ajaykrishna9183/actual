# AI Agent Usage

## Purpose

AI assistance was used to understand the assignment, explore the Actual Budget project structure, select focused E2E scenarios, design Playwright tests, debug local setup issues, and review the test approach for reliability.

## Prompt 1: Understanding the Assignment

### Prompt

Review the QE take-home assignment and identify the required deliverables, expected workflow, and evaluation focus.

### Result

The assignment requires setting up the Actual Budget application locally, identifying one or two main features for E2E testing, creating a test plan, implementing Playwright tests, and documenting AI usage. The evaluation focus is on E2E test planning, robust Playwright automation, and effective AI-assisted development.

## Prompt 2: Selecting E2E Features

### Prompt

Suggest high-value E2E workflows for a personal finance application that are suitable for a focused take-home assignment.

### Result

The selected workflows were account creation with opening balance and rule-based transaction categorization. These were selected because they cover both a core finance workflow and an automation-driven workflow, while keeping the test scope focused and maintainable.

## Prompt 3: Playwright Test Design

### Prompt

Help design Playwright E2E tests using the existing page models and test fixtures in the Actual Budget project.

### Result

The tests were designed to reuse existing page models, create a fresh test file during setup, create a local account, verify the starting balance transaction, create a rule, add a matching transaction, and verify automatic categorization.

## Prompt 4: Debugging Local Setup

### Prompt

The Actual app fails to start locally on Windows with `spawn yarn ENOENT`. Help identify the root cause and suggest a Windows-compatible fix.

### Result

The issue was related to the local development server spawning Yarn directly on Windows. A Windows-compatible adjustment was added in `vite.config.mts` so the backend worker could start successfully during local development.

## Prompt 5: Test Reliability Review

### Prompt

Review the Playwright test approach for reliability and maintainability. Check whether the tests avoid brittle selectors, fixed waits, shared state, and unclear assertions.

### Result

The tests were structured to use existing page models, create a fresh test file during setup, avoid fixed waits, and validate meaningful business outcomes instead of only checking page navigation.
