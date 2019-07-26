import { Selector,t } from 'testcafe';

export async function login() {

  await t
    .typeText(Selector('#exampleInputEmail1'), 'idealfileadmin')
    .click(Selector('.ng-untouched.ng-invalid.ng-dirty'))
    .typeText(Selector('#exampleInputPassword1'), 'Hole17!')
    .click(Selector('button').withText('Login'))
    .wait(3000)
    .expect(Selector('.k-widget.k-grid.ng-star-inserted').count).gte(1, 'Data is not available');

}
