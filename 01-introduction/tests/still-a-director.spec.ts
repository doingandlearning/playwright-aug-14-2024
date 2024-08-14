import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to the home page
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  // Click on Find company info link
  await page.getByRole("link", { name: "Find company information" }).click();

  // Click start now
  await page.getByRole("button", { name: "Start now" }).click();

  // Fill in the search bar
  await page
    .getByLabel("Enter company name, number or")
    .fill("doing and learning ");

  // Press enter
  await page.getByLabel("Enter company name, number or").press("Enter");

  // Find the right company
  await page.getByRole("link", { name: "DOING AND LEARNING LTD" }).click();

  // Go into the people section.
  await page
    .getByRole("link", { name: "People for DOING AND LEARNING" })
    .click();

  // Is Kevin a director?
  await expect(
    page.getByRole("link", { name: "CUNNINGHAM, Kevin Peter" })
  ).toBeVisible();
});
