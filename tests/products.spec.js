import { test, expect } from '@playwright/test';
import { LoginAPI } from '../POM/modules/api/loginAPI';
import { EXISTING_USER, STATUS_TEXT } from '../fixtures';
import { ProductsAPI } from '../POM/modules/api/productsAPI';

test.describe('Add products to cart and change quantity', () => {
  let loginApi, context, page, productsApi;
  test.beforeAll('Setup', async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    //Instantiate login class and get JWT
    loginApi = new LoginAPI(page);
    //Get token
    const loginResp = await loginApi.loginViaAPI(EXISTING_USER);
    //Instantiate products class
    productsApi = new ProductsAPI(page, loginResp.auth.token);
  });

  test.afterAll(async () => {
    await context.close();
  });

  test('Get all products', async () => {
    const response = await productsApi.getAllProducts(page);
    expect(response.status).toBe(STATUS_TEXT['STATUS_SUCCESS']);
  });

  test('3 products should be able to be added in a cart', async () => {
    const response = await productsApi.getAllProducts(page);
    const allProducts = response.products;

    for (let i = 0; i <= 3; i++) {
      console.log(allProducts[i]);
    }
  });
});
