import { test, expect } from '@playwright/test';
import { RegisterPage } from '../POM/modules/ui/registerPage';
import { ENDPOINTS, PAGE_TEXT, VALID_USER } from '../fixtures';
import { Dashboard } from '../POM/modules/ui/dashboardPage';
import { LoginPage } from '../POM/modules/ui/loginPage';
import { Header } from '../POM/modules/ui/header';
import { LoginAPI } from '../POM/modules/api/loginAPI';

test.describe.configure({ mode: 'serial' });
test.describe('Register user successfully', () => {
  let registerPage, dashboard, page, context, header, loginPage, user, loginAPI;
  test.beforeAll('Setup', async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    header = new Header(page);
    registerPage = new RegisterPage(page);
    dashboard = new Dashboard(page);
    loginAPI = new LoginAPI(page);
    user = VALID_USER;

    await page.goto(ENDPOINTS['REGISTER']);
  });

  test.afterEach('Logout user', async () => {
    await loginPage.logout(page);
    await expect(header.loginBtn).toBeVisible;
  });

  test.afterAll('Dispose context', async () => {
    await context.close();
  });

  test('User should be registered successfully', async () => {
    await registerPage.register(page, user);
    await expect(dashboard['title']).toBeVisible();
    await expect(dashboard['title']).toHaveText(PAGE_TEXT['dashboardTitle']);
  });

  test('API - Should be able to login with provided credentials', async () => {
    const response = await loginAPI.loginViaAPI({
      email: user['email'],
      password: user['password'],
    });
    console.log(await response);
  });
});
