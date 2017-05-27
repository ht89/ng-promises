import { NgPromisesPage } from './app.po';

describe('ng-promises App', () => {
  let page: NgPromisesPage;

  beforeEach(() => {
    page = new NgPromisesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
