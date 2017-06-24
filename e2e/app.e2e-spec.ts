import { RecipiesAngularAppPage } from './app.po';

describe('recipies-angular-app App', () => {
  let page: RecipiesAngularAppPage;

  beforeEach(() => {
    page = new RecipiesAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
