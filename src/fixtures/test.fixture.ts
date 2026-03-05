import { test as base } from "@playwright/test";
import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { InventoryPage } from "../pages/inventory.page";
import { LoginPage } from "../pages/login.page";
import { MenuComponent } from "../pages/menu.component";

type Pages = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  menu: MenuComponent;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  menu: async ({ page }, use) => {
    await use(new MenuComponent(page));
  }
});

export { expect } from "@playwright/test";
