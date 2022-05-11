import { test, expect } from "@playwright/test";
import { loginAPIBody } from "@api_body/api-body";
test("Login to Application Using API", async ({ request }) => {
  const loginUser = await request.post(`${process.env.API_URL}/login`, {
    data: loginAPIBody,
  });
  const apiRES = JSON.parse(await loginUser.text());
  console.log(apiRES);
  console.log(apiRES.user);
  console.log(apiRES.user.id);
});
