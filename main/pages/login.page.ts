import { Page, Locator } from "@playwright/test";
export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.submit = page.locator("[data-test='signin-submit']");
  }
  async goto() {
    await this.page.goto("/signin");
  }
  async performLogin() {
    await this.username.fill("Katharina_Bernier");
    await this.password.fill("s3cret");
    await this.submit.click();
  }
}
