import { test, expect } from '@config/page.config';

test(`Gemini AI`, async ({ page, AiBase }) => {
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'test.jpg' });
  await AiBase.getPrompted('Hi there');
  await AiBase.getImageanalyzed('What about this Image.');
});
