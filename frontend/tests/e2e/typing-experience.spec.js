const { test, expect } = require('@playwright/test');

test.describe('Typing Experience', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///C:/users/sean/projects/password-generator/PasswordGenerator.html');
  });

  test('Number of words input should allow typing and update value', async ({ page }) => {
    const numWordsInput = page.locator('#num-words');
    await numWordsInput.fill('7');
    await expect(numWordsInput).toHaveValue('7');
  });

  test('Separator character input should allow typing and update value', async ({ page }) => {
    const separatorCharInput = page.locator('#separator-char');
    await separatorCharInput.fill('-');
    await expect(separatorCharInput).toHaveValue('-');
  });
});
