import { test, expect } from "@playwright/test";
import buttonTitles from "./link-text.json";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.gov.uk/running-a-limited-company");
});

for (let title of buttonTitles) {
  test(`test the ${title} button exists`, async ({ page }) => {
    const element = page.getByRole("button", { name: title });
    await expect(element).toBeVisible();
    await page.pause(); // combined with --headed
  });
}
