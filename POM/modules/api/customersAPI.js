import { ENDPOINTS } from '../../../fixtures';
import { API_ENDPOINTS, API_URL } from '../../../fixtures/pages';
import { BaseAPI } from './baseAPI';

export class CustomersAPI extends BaseAPI {
  constructor(page, token = '') {
    super(page, token);
  }

  async updateShippingInfo(id, payload) {
    return await this.put(
      `${API_ENDPOINTS['CUSTOMERS_ENDPOINT']}/${id}${ENDPOINTS['SHIPPING_INFO']}`,
      payload
    );
  }
}
