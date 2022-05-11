/**
 * This Module we configure POM Fixtures for the Test
 */
import { test as base } from "@playwright/test";
import { LoginPage } from "@pages/login.page";
import { SignupPage } from "@pages/signup.page";
import { logger } from "@config/logger.config";

//Declare Type of Fixture
type myFixture = {
  loginPage: LoginPage;
  signupPage: SignupPage;
  logger: typeof logger;
};

// Extend base test by providing loginpage
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<myFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  logger: async ({}, use) => {
    await use(logger);
  },
});
export { expect } from "@playwright/test";