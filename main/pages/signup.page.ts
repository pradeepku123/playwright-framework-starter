import { Page, Locator } from "@playwright/test";
import { signup } from "@test_data/signup.test_data";
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
    await this.firstName.fill(signup.firstName);
    await this.lastName.fill(signup.lastName);
    await this.username.fill(signup.username);
    await this.password.fill(signup.password);
    await this.cnfPassword.fill(signup.password);
    await this.signup.click();
  }
}
