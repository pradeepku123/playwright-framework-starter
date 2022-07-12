import { test } from '@config/page.config';

test('TC-001 ENV Explore', async ({ ENV }) => {
  console.log(ENV.APP_URL);
});
