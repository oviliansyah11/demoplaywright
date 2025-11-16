import { test, expect } from "@playwright/test";

test("Login with valid credential", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/"); //visit website

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user"); //input username

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce1"); //input password

  await page.locator('[data-test="login-button"]').click(); //click login

  await expect(page.locator('[data-test="title"]')).toContainText("Products"); //expected result
});

test("Login with invalid credential", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/"); //visit website

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("invalid_user"); //input username

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("wrong_password"); //input password

  await page.locator('[data-test="login-button"]').click(); //click login

  await expect(page.locator('[data-test="error"]')).toContainText(
    "Username and password do not match any user in this service"
  ); //expected result
});
