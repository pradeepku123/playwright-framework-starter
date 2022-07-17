import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: ['pw.pages.spec.ts'],
  timeout: 30 * 1000,
  workers: 1,
  expect: {
    timeout: 5000,
  },
  globalSetup: 'main/config/global.setup.config.ts',
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'off',
    headless: true,
    viewport: {
      width: 1920,
      height: 1280,
    },
    ignoreHTTPSErrors: true,
    screenshot: 'off',
    video: 'off',
  },
};

export default config;
