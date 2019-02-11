import { PrjnewPage } from './app.po';

describe('prjnew App', function() {
  let page: PrjnewPage;

  beforeEach(() => {
    page = new PrjnewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
