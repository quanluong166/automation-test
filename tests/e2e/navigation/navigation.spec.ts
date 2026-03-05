import { expect, test } from "../../../src/fixtures/test.fixture";
import { loginAsStandardUser } from "../../../src/utils/auth";

test.describe("Navigation / Menu", () => {
  test("AUTH-05 should logout from side menu @regression", async ({ loginPage, inventoryPage, menu }) => {
    await loginAsStandardUser(loginPage, inventoryPage);
    await inventoryPage.openMenu();
    await menu.logout();
    await loginPage.assertOnLoginPage();
  });

  test("MENU-01 should reset app state and clear cart badge @regression", async ({
    loginPage,
    inventoryPage,
    page,
    menu
  }) => {
    await loginAsStandardUser(loginPage, inventoryPage);
    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.cartBadge).toHaveText("1");

    await inventoryPage.openMenu();
    await menu.resetAppState();
    await page.reload();
    await expect(inventoryPage.cartBadge).toHaveCount(0);
  });
});
