import { Page, Locator } from "@playwright/test";
export class SignupPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly cnfPassword: Locator;
  readonly signup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.cnfPassword = page.locator("#confirmPassword");
    this.signup = page.locator("[data-test='signup-submit']");
  }
  async goto() {
    await this.page.goto("/signup");
  }
  async performSignUp() {
    await this.username.fill(process.env.DB_USERNAME);
    await this.password.fill(process.env.DB_PASSWORD);
    await this.signup.click();
  }
}
