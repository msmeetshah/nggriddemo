import { Selector } from 'testcafe';

fixture `demo`
    .page `https://idf-uks-devops-jbf-test-client.azurewebsites.net/`;

test('New Test 1', async t => {
    await t
        .click(Selector('#exampleInputEmail1'))
        .typeText(Selector('#exampleInputEmail1'), 'idealfileadmin')
        .typeText(Selector('#exampleInputPassword1'), 'Hole17!')
        .click(Selector('button').withText('Login'))
        .click(Selector('#all').find('td').withText('On Site'))
        .click(Selector('[data-kendo-grid-item-index="0"].ng-star-inserted').find('td').withText('01'))
        .doubleClick(Selector('.k-i-loading.ng-star-inserted'))
        .doubleClick(Selector('#k-b8078280-4ad3-40f5-828b-e889cf5e7921').find('.k-icon.k-i-arrow-s'))
        .click(Selector('#k-b8078280-4ad3-40f5-828b-e889cf5e7921').find('.k-icon.k-i-arrow-s'))
        .click(Selector('#fc861edc-cc0b-422b-874e-9e3638746420-4'))
        .click(Selector('.grid-action-icons.ng-star-inserted').find('.fas.fa-file-alt.cursor-pointer.ng-star-inserted[title="Web Form"]'))
        .click(Selector('button').withText('Continue to GDPR'));
});
