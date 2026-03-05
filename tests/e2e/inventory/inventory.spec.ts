import { expect, test } from "../../../src/fixtures/test.fixture";
import { loginAsStandardUser } from "../../../src/utils/auth";

test.describe("Inventory", () => {
  test("INV-06 should add backpack to cart from inventory @smoke @regression", async ({
    loginPage,
    inventoryPage
  }) => {
    await loginAsStandardUser(loginPage, inventoryPage);
    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.cartBadge).toHaveText("1");
    await expect(inventoryPage.removeFromCartButton("sauce-labs-backpack")).toBeVisible();
  });
});
