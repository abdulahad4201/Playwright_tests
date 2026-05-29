import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // click on login button
  await page.locator("id=login2").click();
  // OR
  // await page.click("id=login2");

  // provide username
  await page.locator("#loginusername").fill("ahadiii");
  //OR
  //await page.fill('#loginusername','ahadiii')
  //await page.type('#loginusername','ahadiii')

  // provide password
  await page.locator("#loginpassword").fill("test@123");

  // click on login button
  await page.click("button[onclick='logIn()']");

  await page.waitForTimeout(2000);

  // verify logout button is present
  const logout = await page.locator("//a[@id='logout2']");
  await expect(logout).toBeVisible();

  await page.close();
});
