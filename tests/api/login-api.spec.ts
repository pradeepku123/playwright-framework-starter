import { test, expect } from '@playwright/test';
import { loginAPIBody } from '@api_body/api-body';
test('Login to Application Using API', async ({ request }) => {
  const loginUser = await request.post(`${process.env.API_URL}/login`, {
    data: loginAPIBody,
  });
  const apiRES = JSON.parse(await loginUser.text());
  console.log(apiRES);
  const apiHEaders = loginUser.headers();

  process.env['Cookie'] = apiHEaders['set-cookie'].split(';')[0];
  console.log(process.env[`Cookie`]);
});

test('/bankAccounts', async ({ request }) => {
  const loginUser = await request.get(`${process.env.API_URL}/bankAccounts`, {
    headers: {
      Cookie: process.env['Cookie'],
    },
  });
  const apiRES = JSON.parse(await loginUser.text());
  console.log(apiRES);
});
