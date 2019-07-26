import { Selector } from 'testcafe';

fixture`New Fixture`
    .page`https://idf-uks-devops-jbf-test-client.azurewebsites.net`;

test('New Test', async t => {
    await t
        .typeText(Selector('#exampleInputEmail1'), 'idealfileadmin')
        .typeText(Selector('#exampleInputPassword1'), 'Hole17!')
        .click(Selector('button').withText('Login'))
        .click(Selector('small').withText('MENU'))
        .click(Selector('li').withText('REVIEW'))
        .click(Selector('[formcontrolname="dealerLocationId"] .k-input').nth(0).with({timeout : 10000}))
        .wait(5000)
        .click(Selector('[formcontrolname="dealerLocationId"]'))
        .wait(4000)
    // .click(Selector('[formcontrolname="ownerId"]'))
    // .wait(4000)
    // .click(Selector('[formcontrolname="archivedFrom"] .k-select'))
    //  .wait(4000)
    // .click(Selector('[formcontrolname="archivedTo"] .k-select'))
    // .wait(4000)
    // .click(Selector('[formcontrolname="deliveredFrom"] .k-select'))
    // .wait(4000)
    // .click(Selector('[formcontrolname="deliveredTo"] .k-select'))
    // .wait(4000)
    // .click(Selector('[formcontrolname="invoicedFrom"] .k-select'))
    // .wait(4000)
    // .click(Selector('[formcontrolname="invoicedTo"] .k-select'))
    // .wait(4000)
    // .click(Selector('[formcontrolname="Status"]'))
    // .wait(4000)
    // .click(Selector('[formcontrolname="incompleteOnly"]'))
    // .wait(4000)

    //li.k-item.ng-star-inserted

const tmp = await t.click(Selector('[formcontrolname="dealerLocationId"]').nth(0));
await t.wait(3000);
const tmp1 =await tmp.textContent
console.log("tmp is",tmp1);
    // .click(Selector('[formcontrolname="dealerLocationId"] [role="listbox"]').nth(0).innerText)

    // .click(Selector('#c21859b8-8601-413a-98cf-0338c3f8e22f-1'))
    // .click(Selector('    ').find('span').withText('Select Owner'))
    // .click(Selector('#fd022fb4-ec86-4399-9c4f-9688c25eda15-3f6b140a-0017-4a57-a05c-8292164910af'))
    // .click(Selector('button').withText('Search'));
});
