const { test, expect } = require('@playwright/test');

test.describe('Scrolling Animations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///C:/users/sean/projects/password-generator/PasswordGenerator.html');
  });

  test('Page should be scrollable', async ({ page }) => {
    // Ensure the terminal container is scrollable
    const terminalContainer = page.locator('.terminal-container');
    await expect(terminalContainer).toHaveCSS('overflow-y', 'auto');

    // Scroll down and check if scroll position changes
    const initialScrollTop = await terminalContainer.evaluate(node => node.scrollTop);
    await terminalContainer.evaluate(node => node.scrollTop = node.scrollHeight);
    const newScrollTop = await terminalContainer.evaluate(node => node.scrollTop);
    expect(newScrollTop).toBeGreaterThan(initialScrollTop);
  });
});
