import { test } from '@playwright/test';

// Hook
test.beforeAll(() => {
    console.log('This is the beginning of the test suite');
});

// Hook
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200');
    await page.getByText('Forms').click();
});

test('the first test', async ({page}) => {
    await page.getByText('Form Layouts').click();
});

test('navigate to datepicker page', async ({page}) => {
    await page.getByText('Datepicker').click();
});

// Hook
test.afterEach(() => {
    console.log('Test completed');
});

// Hook
test.afterAll(() => {
    console.log('All tests are done!');
});

// Below we have define two test suites where we removed this(await page.goto('http://localhost:4200');) line from beforeEach hooks.
// Because we already declared it inside a beforeEach hook on the top of this file.

// With the describe, we can add skip or only to a group of tests.
// Example: test.describe.only or test.describe.skip
// skip - will skip all tests inside the describe block
// only - will run only the tests inside the describe block
test.describe('Suite 1', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Charts').click();
    });

    test('test 1', async ({page}) => {
        await page.getByText('Chart Layouts').click();
    });

    test('test 2', async ({page}) => {
        await page.getByText('Datepicker').click();
    });
});

test.describe('Suite 1', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Admin').click();
    });

    test('test 1', async ({page}) => {
        await page.getByText('Admin Layouts').click();
    });

    test('test 2', async ({page}) => {
        await page.getByText('Datepicker').click();
    });
});

