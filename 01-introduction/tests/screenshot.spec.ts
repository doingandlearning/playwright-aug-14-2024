import { test, expect } from "@playwright/test";

test("take a screenshot of the page", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({
    path: "screenshots/mobile-screenshot.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 1024, height: 1366 });
  await page.screenshot({
    path: "screenshots/ipad-pro-screenshot.png",
    fullPage: true,
  });

  const cookieBanner = await page.getByLabel("Cookies on GOV.UK");
  await cookieBanner.screenshot({ path: "screenshots/cookiebanner.png" });

  await expect(cookieBanner).toHaveScreenshot();
});
