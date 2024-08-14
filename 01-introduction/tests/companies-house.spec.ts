import { test, expect } from "@playwright/test";

test("website title is correct", async ({ page }) => {
  // go to the webpage
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  // find the title
  const title = await page.title();

  // confirm that the title is right
  expect(title).toBe("Companies House - GOV.UK");
});
