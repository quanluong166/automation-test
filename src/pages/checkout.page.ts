import { expect, type Page } from "@playwright/test";
import { urls } from "../constants/urls";
import { parseDollar } from "../utils/price";

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  readonly firstNameInput = this.page.locator("[data-test='firstName']");
  readonly lastNameInput = this.page.locator("[data-test='lastName']");
  readonly postalCodeInput = this.page.locator("[data-test='postalCode']");
  readonly continueButton = this.page.locator("[data-test='continue']");
  readonly finishButton = this.page.locator("[data-test='finish']");
  readonly itemTotalLabel = this.page.locator(".summary_subtotal_label");
  readonly taxLabel = this.page.locator(".summary_tax_label");
  readonly totalLabel = this.page.locator(".summary_total_label");
  readonly completeHeader = this.page.locator("[data-test='complete-header']");

  async assertStepOneLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${urls.checkoutStepOne}$`));
    await expect(this.continueButton).toBeVisible();
  }

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async assertStepTwoLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${urls.checkoutStepTwo}$`));
    await expect(this.finishButton).toBeVisible();
  }

  async assertPriceMath(): Promise<void> {
    const itemTotalText = (await this.itemTotalLabel.textContent()) || "";
    const taxText = (await this.taxLabel.textContent()) || "";
    const totalText = (await this.totalLabel.textContent()) || "";

    const itemTotal = parseDollar(itemTotalText.split(":")[1] || "0");
    const tax = parseDollar(taxText.split(":")[1] || "0");
    const total = parseDollar(totalText.split(":")[1] || "0");

    expect(total).toBeCloseTo(itemTotal + tax, 2);
  }

  async finishCheckout(): Promise<void> {
    await this.finishButton.click();
  }

  async assertCheckoutComplete(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${urls.checkoutComplete}$`));
    await expect(this.completeHeader).toHaveText("Thank you for your order!");
  }
}
