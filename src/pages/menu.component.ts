import { type Page } from "@playwright/test";

export class MenuComponent {
  constructor(private readonly page: Page) {}

  readonly logoutLink = this.page.locator("[data-test='logout-sidebar-link']");
  readonly resetAppStateLink = this.page.locator("[data-test='reset-sidebar-link']");
  readonly aboutLink = this.page.locator("[data-test='about-sidebar-link']");

  async logout(): Promise<void> {
    await this.logoutLink.click();
  }

  async resetAppState(): Promise<void> {
    await this.resetAppStateLink.click();
  }
}

