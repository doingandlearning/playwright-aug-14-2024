import { test, expect } from "@playwright/test";

const urls = [
  {
    url: "https://www.gov.uk/government/organisations/companies-house",
    title: "Companies House - GOV.UK",
  },
  {
    url: "https://www.gov.uk/get-information-about-a-company",
    title: "Get information about a company - GOV.UK!!!",
  },
  {
    url: "https://www.gov.uk/running-a-limited-company",
    title:
      "Running a limited company: your responsibilities: Directors’ responsibilities - GOV.UK",
  },
];

for (let testCase of urls) {
  test(`test the title of ${testCase.url}`, async ({ page }) => {
    await page.goto(testCase.url);
    const actualTitle = await page.title();
    expect(actualTitle).toBe(testCase.title);
  });
}
