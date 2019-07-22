import { Selector } from 'testcafe';

fixture`Login Test`
    .page`https://idf-uks-devops-jbf-test-client.azurewebsites.net`;

export async function login(t) {
    await t
        .typeText(Selector('#exampleInputEmail1'), 'idealfileadmin')
        .click(Selector('.ng-untouched.ng-invalid.ng-dirty'))
        .typeText(Selector('#exampleInputPassword1'), 'Hole17!')
        .click(Selector('button').withText('Login'))
}

export default class LoginPage {

t:any;
email:any;
password:any;
submitButton:any;

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
    }
}

test('New Test 1', async t => {
    var page = new LoginPage(t);
    await page.login();
});

test('New Test 2', async t => {

    var page = new LoginPage(t);
    await page.login();

    await t
        .hover(Selector('div').withText('SEARCH FOR JOB PACKS'))
        .typeText(Selector('span').withText('SEARCH FOR JOB PACKS'), 'admin')
        .typeText(Selector('.form-control.mr-sm-2.search-box'), 'admin')
        .click(Selector('.btn.btn-success.search-button'))
        .wait(3000)
        .expect(Selector('label').withText('Search Results for').textContent).eql("Search Results for 'admin'");
});
