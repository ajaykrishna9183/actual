import type { Page } from '@playwright/test';

import { expect, test } from './fixtures';
import type { AccountPage } from './page-models/account-page';
import { ConfigurationPage } from './page-models/configuration-page';
import { Navigation } from './page-models/navigation';
import type { RulesPage } from './page-models/rules-page';

test.describe('QE Take Home - Core Finance Workflows', () => {
  let page: Page;
  let navigation: Navigation;
  let configurationPage: ConfigurationPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigation = new Navigation(page);
    configurationPage = new ConfigurationPage(page);

    await page.goto('/');
    await configurationPage.createTestFile();
  });

  test.afterEach(async () => {
    await page?.close();
  });

  test('creates a local account and verifies the starting balance transaction', async () => {
    const accountPage: AccountPage = await navigation.createAccount({
      name: 'QE Checking',
      offBudget: false,
      balance: 250,
    });

    await expect(accountPage.accountName).toHaveText('QE Checking');

    const transaction = accountPage.getNthTransaction(0);

    await expect(transaction.payee).toHaveText('Starting Balance');
    await expect(transaction.category).toHaveText('Starting Balances');
    await expect(transaction.debit).toHaveText('');
    await expect(transaction.credit).toHaveText('250.00');
  });

  test('creates a rule and applies it to a matching transaction', async () => {
    const rulesPage: RulesPage = await navigation.goToRulesPage();

    const editRuleModal = await rulesPage.createNewRule();

    await editRuleModal.fill({
      conditions: [
        {
          field: 'payee',
          op: 'is',
          value: 'Fast Internet',
        },
      ],
      actions: [
        {
          field: 'category',
          value: 'General',
        },
      ],
    });

    await editRuleModal.save();

    const createdRule = rulesPage.getNthRule(0);

    await expect(createdRule.conditions).toHaveText(['payee is Fast Internet']);
    await expect(createdRule.actions).toHaveText(['set category to General']);

    const accountPage = await navigation.goToAccountPage('HSBC');

    await accountPage.createSingleTransaction({
      payee: 'Fast Internet',
      debit: '12.34',
    });

    const transaction = accountPage.getNthTransaction(0);

    await expect(transaction.payee).toHaveText('Fast Internet');
    await expect(transaction.category).toHaveText('General');
    await expect(transaction.debit).toHaveText('12.34');
    await expect(transaction.credit).toHaveText('');
  });
});