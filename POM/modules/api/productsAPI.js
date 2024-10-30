import { API_ENDPOINTS, ENDPOINTS } from '../../../fixtures';
import { BaseAPI } from './baseAPI';

export class ProductsAPI extends BaseAPI {
  constructor(page, token = '') {
    super(page, token);
    this.endpoint = API_ENDPOINTS['PRODUCTS_ENDPOINT'];
  }

  async getAllProducts() {
    return await this.get(this.endpoint);
  }

  async addProductToCart(id, productId) {
    return await this.post(
      `${API_ENDPOINTS['CART_ENDPOINT']}/${id}${ENDPOINTS['PRODUCTS']}/${productId}`
    );
  }

  async getCart(id) {
    return await this.get(`${API_ENDPOINTS['CART_ENDPOINT']}/${id}`);
  }
  async deleteCart(id) {
    return await this.delete(`${API_ENDPOINTS['CART_ENDPOINT']}/${id}`);
  }
}
