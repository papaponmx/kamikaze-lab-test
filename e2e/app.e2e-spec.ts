import { KamikazeLabTestPage } from './app.po';

describe('kamikaze-lab-test App', () => {
  let page: KamikazeLabTestPage;

  beforeEach(() => {
    page = new KamikazeLabTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
