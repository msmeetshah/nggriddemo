import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://idf-uks-devops-jbf-test-client.azurewebsites.net`;

test('New Test', async t => {
    await t
        .typeText(Selector('#exampleInputEmail1'), 'idealfileadmin')
        .typeText(Selector('#exampleInputPassword1'), 'Hole17!')
        .click(Selector('button').withText('Login'))
        ;
});
