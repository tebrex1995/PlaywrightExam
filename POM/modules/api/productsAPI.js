import { API_ENDPOINTS } from '../../../fixtures';
import { BaseAPI } from './baseAPI';

export class ProductsAPI extends BaseAPI {
  constructor(page, token = '') {
    super(page, token);
    this.endpoint = API_ENDPOINTS['PRODUCTS_ENDPOINT'];
  }

  async getAllProducts() {
    return await this.get(this.endpoint);
  }
}
