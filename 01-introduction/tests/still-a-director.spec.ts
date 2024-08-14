import { test, expect } from "@playwright/test";

// DRY
// Don't Repeat Yourself

// Setup
test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  // If you can see the cookies, get rid of it!
});

// Tidy up
test.afterEach(() => {
  console.log("I just ran a test, I'm pretty tired!");
});

test("check if Kevin is still a director", async ({ page }) => {
  // Go to the home page

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

test("website title is correct", async ({ page }) => {
  // find the title
  const title = await page.title();

  // confirm that the title is right
  expect(title).toBe("Companies House - GOV.UK");
});

// Be Clever < --- > Be Clear
