import { expect, type Page } from "@playwright/test";
import { urls } from "../constants/urls";

export class CartPage {
  constructor(private readonly page: Page) {}

  readonly cartItems = this.page.locator(".cart_item");
  readonly checkoutButton = this.page.locator("[data-test='checkout']");
  readonly continueShoppingButton = this.page.locator("[data-test='continue-shopping']");

  async assertLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${urls.cart}$`));
    await expect(this.checkoutButton).toBeVisible();
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
