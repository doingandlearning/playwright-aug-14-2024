import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.csm-testcenter.org/test?do=test&subdo=file_upload"
  );
  await page
    .getByRole("row", { name: "File to upload C:\\fakepath\\" })
    .getByRole("textbox")
    .setInputFiles("./tests/link-text.json");

  await page.getByRole("button", { name: "Start HTTPS upload" }).click();
  await expect(page.getByText("File successfully uploaded")).toBeVisible();
});
