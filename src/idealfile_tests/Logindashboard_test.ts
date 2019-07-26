import { Selector } from 'testcafe';

fixture`Login Dashboard Test`
  .page`https://idf-uks-devops-jbf-test-client.azurewebsites.net`;

// export async function login(t) {
//   await t
//     .typeText(Selector('#exampleInputEmail1'), 'idealfileadmin')
//     .click(Selector('.ng-untouched.ng-invalid.ng-dirty'))
//     .typeText(Selector('#exampleInputPassword1'), 'Hole17!')
//     .click(Selector('button').withText('Login'));
// }
// class Helper{
//    async hasGridData (t:any,selector:string){
//     const dt = await t.Selector(selector).count == 1;
//     return dt;
//   }
// }
export class LoginPage {

  t: any;
  email: any;
  password: any;
  submitButton: any;

  constructor(t) {
    this.t = t;
    this.email = Selector('#exampleInputEmail1');
    this.password = Selector('#exampleInputPassword1');
    this.submitButton = Selector('button').withText('Login');
  }

  async login() {

    await this.t
      .typeText(Selector('#exampleInputEmail1'), 'idealfileadmin')
      .click(Selector('.ng-untouched.ng-invalid.ng-dirty'))
      .typeText(Selector('#exampleInputPassword1'), 'Hole17!')
      .click(Selector('button').withText('Login'))
      .wait(3000)
      .expect(Selector('.k-widget.k-grid.ng-star-inserted').count).gte(1, 'Data is not available');
    // await this.t.expect(Selector('.k-widget.k-grid.ng-star-inserted').exists).ok()
  }
}

test('Login Test', async t => {
  var page = new LoginPage(t);
  await page.login();
});

test('Dashboard Search Test', async t => {

  var page = new LoginPage(t);
  await page.login();

  await t
    .hover(Selector('div').withText('SEARCH FOR JOB PACKS'))
    .typeText(Selector('span').withText('SEARCH FOR JOB PACKS'), 'admin')
    .typeText(Selector('.form-control.mr-sm-2.search-box'), 'admin')
    .click(Selector('.btn.btn-success.search-button'))
    .wait(3000)
    .expect(Selector('label').withText('Search Results for').textContent).eql("Search Results for 'admin'")
    .expect(Selector('.k-widget.k-grid').count).gte(1, 'Data is not available');
});

test('My Jobpacks Grid Test', async t => {

  var page = new LoginPage(t);
  await page.login();

  await t.click(Selector('#profile-tab'))
    .wait(3000)
    .expect(Selector('#myjobpack .k-widget.k-grid').count).gte(1, 'Data is not available');
});

test('Recently Added Grid Test', async t => {

  var page = new LoginPage(t);
  await page.login();

  await t.click(Selector('a').withText('Recently Added'))
    .wait(3000)
    .expect(Selector('#recentlyadded .k-widget.k-grid').count).gte(1, 'Data is not available');
  // var tmp = new Helper().hasGridData(t,'#recentlyadded .k-widget.k-grid');
  // await t.expect( tmp).eql(true, 'Data is not available');
});

test('Archived Grid Test', async t => {

  var page = new LoginPage(t);
  await page.login();

  await t.click(Selector('a').withText('Archived'))
    .wait(3000)
    .expect(Selector('#archived .k-widget.k-grid').count).gte(1, 'Data is not available');
});
