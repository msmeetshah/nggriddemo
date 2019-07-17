import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:4200/display`;

    const gridData =  Selector('.k-grid');

    test('My first test', async t => {
      await t.click(gridData)
      // await scroll(gridData)
      await t.wait(3000)
});
