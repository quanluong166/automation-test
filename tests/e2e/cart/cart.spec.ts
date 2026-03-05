import { expect, test } from "../../../src/fixtures/test.fixture";
import { loginAsStandardUser } from "../../../src/utils/auth";

test.describe("Cart", () => {
  test("CART-02 should show correct cart details for added item @smoke @regression", async ({
    loginPage,
    inventoryPage,
    cartPage
  }) => {
    await loginAsStandardUser(loginPage, inventoryPage);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.assertLoaded();
    await expect(cartPage.cartItems).toHaveCount(1);
    await expect(cartPage.cartItems.first()).toContainText("Sauce Labs Backpack");
    await expect(cartPage.cartItems.first()).toContainText("$29.99");
  });
});
