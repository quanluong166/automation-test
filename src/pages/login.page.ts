import { expect, type Page } from "@playwright/test";
import { urls } from "../constants/urls";

export class LoginPage {
  constructor(private readonly page: Page) {}

  private usernameInput = this.page.getByPlaceholder("Username");
  private passwordInput = this.page.getByPlaceholder("Password");
  private loginButton = this.page.getByRole("button", { name: "Login" });
  private errorMessage = this.page.locator("[data-test='error']");

  async goto(): Promise<void> {
    await this.page.goto(urls.login);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertOnLoginPage(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${urls.login}$`));
    await expect(this.loginButton).toBeVisible();
  }

  async getErrorMessage(): Promise<string> {
    await expect(this.errorMessage).toBeVisible();
    return (await this.errorMessage.textContent())?.trim() || "";
  }
}
