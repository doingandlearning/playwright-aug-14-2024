import { test, expect } from "@playwright/test";

test("Check cookie banner goes and stays gone", async ({ page }) => {
  // Go to the page
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  // Check is the cookie banner visible - it should be!!
  const cookieBanner = await page.getByLabel("Cookies on GOV.UK");
  expect(cookieBanner).toBeVisible();

  // Click on the buttons
  await page.getByRole("button", { name: "Accept additional cookies" }).click();
  await page.getByRole("button", { name: "Hide this message" }).click();

  // Cookie banner should be gone!
  expect(cookieBanner).not.toBeVisible();

  // Refresh the page.
  await page.reload();

  // Cookie banner should still be gone!
  expect(cookieBanner).not.toBeVisible();
});
