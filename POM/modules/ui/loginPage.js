import { Header } from './header';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('button');
  }

  async logout(page) {
    const header = new Header(page);
    if (await header.burgerMenu.isVisible()) {
      await header.burgerMenu.click();
      await header.logoutButton.click();
    }
  }
}
