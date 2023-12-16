import { test, expect } from '@config/page.config';

test(`Gemini AI`, async ({ page, AiBase, signupPage, loginPage }) => {
  await AiBase.getPrompted('Hi there');
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: `./screenshots/screenshot.png` });
  await signupPage.goto();
  await page.screenshot({ path: `./screenshots/screenshot.png` });
  await AiBase.getImageanalyzed('Analyzed screenshot image');
  await loginPage.goto();
  await page.screenshot({ path: `./screenshots/screenshot.png` });
  await AiBase.getImageanalyzed('Analyzed screenshot image');
});
