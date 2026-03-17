import { test, expect } from "@playwright/test";
test.describe("Navigation and Homepage", () => {
  test("should display the homepage and have correct title", async ({
    page,
  }) => {
    // Navigate to homepage
    await page.goto("/");
    // Next.js App Router basic sanity check
    await expect(page).toHaveTitle(/The OM Lounge/i);
  });
  // Example of testing a not-found page routing
  test("should show 404 page for unknown routes", async ({ page }) => {
    // Navigate to a guaranteed non-existent route
    const response = await page.goto(
      "/this-route-definitely-does-not-exist-123",
    );

    // Check if the status code is 404
    expect(response?.status()).toBe(404);
  });
});
