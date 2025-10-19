const { test, expect } = require('@playwright/test');

test.describe('Button Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///C:/users/sean/projects/password-generator/PasswordGenerator.html');
  });

  test('Generate button should have hover effects', async ({ page }) => {
    const generateButton = page.locator('#generate-btn');
    await generateButton.hover();
    // Expect the button to scale up and have a shadow on hover
    await expect(generateButton).toHaveCSS('transform', 'matrix(1.05, 0, 0, 1.05, 0, 0)');
    await expect(generateButton).toHaveCSS('box-shadow', /rgb\(40, 167, 69\) 0px 0px 10px/);
  });

  test('Generate button should have active effects', async ({ page }) => {
    const generateButton = page.locator('#generate-btn');
    await generateButton.hover();
    await generateButton.mouse.down();
    // Expect the button to scale back to original size on active
    await expect(generateButton).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    await generateButton.mouse.up();
  });

  test('Copy button should have hover effects', async ({ page }) => {
    const copyButton = page.locator('#copy-btn');
    // The copy button is initially hidden, so we need to generate a password first
    await page.locator('#generate-btn').click();
    await expect(copyButton).toBeVisible();
    
    await copyButton.hover();
    // Expect the button to scale up and have a shadow on hover
    await expect(copyButton).toHaveCSS('transform', 'matrix(1.05, 0, 0, 1.05, 0, 0)');
    await expect(copyButton).toHaveCSS('box-shadow', /rgb\(40, 167, 69\) 0px 0px 10px/);
  });

  test('Copy button should have active effects', async ({ page }) => {
    const copyButton = page.locator('#copy-btn');
    // The copy button is initially hidden, so we need to generate a password first
    await page.locator('#generate-btn').click();
    await expect(copyButton).toBeVisible();

    await copyButton.hover();
    await copyButton.mouse.down();
    // Expect the button to scale back to original size on active
    await expect(copyButton).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    await copyButton.mouse.up();
  });
});
