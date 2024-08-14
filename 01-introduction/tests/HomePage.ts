import { Page } from "@playwright/test";

export class HomePage {
  constructor(public page: Page) {
    // beforeEach
    "https://www.gov.uk/government/organisations/companies-house";
  }

  cookieBanner() {
    return this.page.getByLabel("Cookies on GOV.UK");
  }

  async clickTheCookieButtons() {
    await this.page
      .getByRole("button", { name: "Accept additional cookies" })
      .click();
    await this.page.getByRole("button", { name: "Hide this message" }).click();
  }
}
