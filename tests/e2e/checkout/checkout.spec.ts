import { expect, test } from "../../../src/fixtures/test.fixture";
import { loginAsStandardUser } from "../../../src/utils/auth";

test.describe("Checkout", () => {
  test("CHK1-01 should show error when first name is missing @smoke @regression", async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
    page
  }) => {
    await loginAsStandardUser(loginPage, inventoryPage);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.checkout();

    await checkoutPage.assertStepOneLoaded();
    await checkoutPage.continueButton.click();
    await expect(page.locator("[data-test='error']")).toContainText("First Name is required");
  });

  test("CHK2-04 should complete checkout successfully @smoke @regression", async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
  }) => {
    await loginAsStandardUser(loginPage, inventoryPage);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.checkout();

    await checkoutPage.fillCheckoutInfo("Quan", "Luong", "70000");
    await checkoutPage.assertStepTwoLoaded();
    await checkoutPage.assertPriceMath();
    await checkoutPage.finishCheckout();
    await checkoutPage.assertCheckoutComplete();
  });
});
