import { users } from "../../../src/constants/users";
import { urls } from "../../../src/constants/urls";
import { expect, test } from "../../../src/fixtures/test.fixture";

test.describe("Auth", () => {
  test("AUTH-01 should login with valid credentials @smoke @regression", async ({
    loginPage,
    inventoryPage,
    page
  }) => {
    await loginPage.goto();
    await loginPage.login(users.standard, users.password);
    await inventoryPage.assertLoaded();
    await expect(page).toHaveURL(new RegExp(`${urls.inventory}$`));
  });

  test("AUTH-02 should show error for invalid credentials @smoke @regression", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login("invalid_user", "wrong_pass");
    await expect(await loginPage.getErrorMessage()).toContain(
      "Username and password do not match any user in this service"
    );
  });

  test("AUTH-03 should block locked out user @smoke @regression", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.lockedOut, users.password);
    await expect(await loginPage.getErrorMessage()).toContain("Sorry, this user has been locked out.");
  });
});
