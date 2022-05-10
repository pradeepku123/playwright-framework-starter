import { test, expect } from "@playwright/test";
test("Login to Application Using API", async ({ request }) => {
  const loginUser = await request.post(`${process.env.API_URL}/login`, {
    data: {
      type: "login",
      username: "Katharina_Bernier",
      password: "s3cret",
    },
  });
  const apiRES = JSON.parse(await loginUser.text());
  console.log(apiRES);
  console.log(apiRES.user);
  console.log(apiRES.user.id);
});
