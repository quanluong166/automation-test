import { users } from "../constants/users";
import type { LoginPage } from "../pages/login.page";
import type { InventoryPage } from "../pages/inventory.page";

export async function loginAsStandardUser(loginPage: LoginPage, inventoryPage: InventoryPage): Promise<void> {
  await loginPage.goto();
  await loginPage.login(users.standard, users.password);
  await inventoryPage.assertLoaded();
}
