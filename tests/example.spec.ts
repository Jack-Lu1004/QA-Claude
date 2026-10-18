import { test, expect } from '@playwright/test';

// 測試 1：打開官網，確認網頁標題有 "Playwright"
test('首頁標題正確', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// 測試 2：點 Get started，確認有跳到 Installation 頁面
test('Get started 連結正常', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
