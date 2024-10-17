export class BaseAPI {
  constructor(page, token = '') {
    this.page = page;
    this.token = token;
  }
  async post(endpoint, payload) {
    const response = await this.page.request.post(endpoint, {
      headers: this.getHeaders(),
      data: payload,
    });
    const responseJson = await response.json();
    return responseJson;
  }

  getToken() {
    return this.token;
  }

  getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: `Bearer ${this.getToken()}`,
    };
  }
}
