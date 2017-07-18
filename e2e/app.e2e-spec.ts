import { PosPage } from './app.po';

describe('pos App', () => {
  let page: PosPage;

  beforeEach(() => {
    page = new PosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
