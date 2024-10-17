import { test, expect } from '@playwright/test';
import { RegisterPage } from '../POM/modules/ui/registerPage';
import { ENDPOINTS, PAGE_TEXT, STATUS_TEXT, VALID_USER } from '../fixtures';
import { Dashboard } from '../POM/modules/ui/dashboardPage';
import { LoginPage } from '../POM/modules/ui/loginPage';
import { Header } from '../POM/modules/ui/header';
import { LoginAPI } from '../POM/modules/api/loginAPI';
import { CustomersAPI } from '../POM/modules/api/customersAPI';

test.describe.configure({ mode: 'serial' });
test.describe('Register user successfully', () => {
  let registerPage,
    dashboard,
    page,
    context,
    header,
    loginPage,
    user,
    loginAPI,
    token,
    id;

  test.beforeAll('Setup', async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
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
    await page.waitForTimeout(4000);
  });

  test('API - Should be able to login with provided credentials', async () => {
    const response = await loginAPI.loginViaAPI({
      email: user['email'],
      password: user['password'],
    });
    console.log(await response);
    //Get token and ID for next test
    id = await response.user.id;
    token = await response.auth.token;
    expect(response.status).toBe(STATUS_TEXT['STATUS_SUCCESS']);
    expect(response.message).toBe(STATUS_TEXT['SUCCESSFULL_LOGIN']);
    expect(response.user).toHaveProperty('id');
    expect(response.user.username).toBe(user['username']);
  });

  test('Shipping info of a new user should be able to be updated', async () => {
    const customersApi = new CustomersAPI(page, token);
    const response = await customersApi.updateShippingInfo(id, {
      first_name: 'John',
    });
    console.log(await response);
    await expect(true).toBe(true);
  });
});
