import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  snapshotDir: './snapshots',
  testMatch: ['*.spec.ts'],
  timeout: 10 * 1000,
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
});
