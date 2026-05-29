//const { test, expect } = require("@playwright/test");
//OR
import { test, expect } from "@playwright/test";

test("Home Page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const title = await page.title();
  console.log("Page title is:", title);

  await expect(page).toHaveTitle("STORE");

  const url = page.url();
  console.log("Page URL is:", url);

  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

  await page.close();
});
