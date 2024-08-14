import { test, expect } from "@playwright/test";

test("test", async ({ context }) => {
  const page1 = context.newPage();
  const page2 = context.newPage();
  (await page1).frames();
});

// browser -> context -> page
