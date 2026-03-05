import { expect, type Locator, type Page } from "@playwright/test";
import { urls } from "../constants/urls";

export class InventoryPage {
  constructor(private readonly page: Page) {}

  readonly productItems = this.page.locator(".inventory_item");
  readonly cartBadge = this.page.locator("[data-test='shopping-cart-badge']");
  readonly cartLink = this.page.locator("[data-test='shopping-cart-link']");
  readonly sortSelect = this.page.locator("[data-test='product-sort-container']");
  readonly burgerMenuButton = this.page.locator("#react-burger-menu-btn");

  async assertLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${urls.inventory}$`));
    await expect(this.productItems).toHaveCount(6);
  }

  addToCartButton(productSlug: string): Locator {
    return this.page.locator(`[data-test='add-to-cart-${productSlug}']`);
  }

  removeFromCartButton(productSlug: string): Locator {
    return this.page.locator(`[data-test='remove-${productSlug}']`);
  }

  async addBackpackToCart(): Promise<void> {
    await this.addToCartButton("sauce-labs-backpack").click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async openMenu(): Promise<void> {
    await this.burgerMenuButton.click();
  }
}
