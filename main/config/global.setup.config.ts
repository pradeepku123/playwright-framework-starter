import { FullConfig } from '@playwright/test';
const dotenv = require('dotenv');
/**
 * link with src/config/env.config.ts where the environment variables are defined.
 * need to pass <test_env> while CLI for choose Envirnment variables. --> est_env=prod npm run test --> extract env.prod File data
 * globalsetup Execute befor all test case where we override global ENV variables.
 */
async function globalSetup(config: FullConfig) {
  if (process.env.test_env) {
    dotenv.config({ path: `.env.${process.env.test_env}`, override: true });
  }
}

export default globalSetup;
