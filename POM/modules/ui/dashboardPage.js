export class Dashboard {
  constructor(page) {
    this.page = page;
    this.title = page.locator('span.mt-4');
  }
}
