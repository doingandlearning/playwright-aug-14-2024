import { test, expect } from "@playwright/test";
import { HomePage } from "./HomePage";

test("Check cookie banner goes and stays gone", async ({ page }) => {
  // Go to the page
  let homepage = new HomePage(page);
  // Check is the cookie banner visible - it should be!!
  const cookieBanner = homepage.cookieBanner();
  await expect(cookieBanner).toBeVisible();

  // Click on the buttons
  await homepage.clickTheCookieButtons();

  // Cookie banner should be gone!
  await expect(cookieBanner).not.toBeVisible();

  // Refresh the page.
  await page.reload();

  // Cookie banner should still be gone!
  await expect(cookieBanner).not.toBeVisible();
});
