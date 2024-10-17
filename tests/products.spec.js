import { test, expect } from '@playwright/test';
import { LoginAPI } from '../POM/modules/api/loginAPI';
import { EXISTING_USER, STATUS_TEXT } from '../fixtures';
import { ProductsAPI } from '../POM/modules/api/productsAPI';

test.describe('Add products to cart and change quantity', () => {
  let loginApi, context, page, productsApi, id;

  test.beforeAll('Setup', async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    //Instantiate login class and get JWT
    loginApi = new LoginAPI(page);
    //Get token
    const loginResp = await loginApi.loginViaAPI(EXISTING_USER);
    id = await loginResp.user.id;
    //Instantiate products class
    productsApi = new ProductsAPI(page, loginResp.auth.token);
  });

  test.afterAll(async () => {
    await productsApi.deleteCart(id);
    await context.close();
  });

  test('Get all products', async () => {
    const response = await productsApi.getAllProducts(page);
    expect(response.status).toBe(STATUS_TEXT['STATUS_SUCCESS']);
  });

  test('3 products should be able to be added in a cart', async () => {
    const response = await productsApi.getAllProducts(page);
    const allProducts = response.products;
    const quantities = [3, 5, 7];
    const cart = [];

    for (let i = 0; i < 3; i++) {
      const productId = allProducts[i].id;

      for (let p = 0; p < quantities[i]; p++) {
        await productsApi.addProductToCart(id, productId);
      }
      cart.push(productId);
    }
    const getCart = await productsApi.getCart(id);
    expect(getCart.status).toBe(STATUS_TEXT['STATUS_SUCCESS']);
    expect(getCart.cart).toHaveLength(3);
    expect(getCart.cart[0].quantity).toBe(3);
  });
});
