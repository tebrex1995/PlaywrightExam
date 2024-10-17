import { BaseAPI } from './baseAPI';
import { API_ENDPOINTS } from '../../../fixtures';

export class LoginAPI extends BaseAPI {
  constructor(page) {
    super(page);
    this.endpoint = API_ENDPOINTS['LOGIN_ENDPOINT'];
  }

  async loginViaAPI(payload) {
    return await this.post(this.endpoint, payload);
  }
}
