import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page, request }) => {
  const response = await request.post("https://conduit-api.bondaracademy.com/api/users/login", {
    data: {
      user: {
        email: "test123@abv.bg",
        password: "112233Ivo"
      }
    }
  });
  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody.user.email).toBe("test123@abv.bg");
  expect(responseBody.user.token).toBeDefined();
});
