export class RegisterPage {
  constructor(page) {
    this.page = page;
    //Locators
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.emailInput = page.locator('#email');
    this.registerButton = page.locator('button');
  }

  async register(page, { username, email, password }) {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.registerButton.click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
  }
}
