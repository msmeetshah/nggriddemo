import { Selector } from 'testcafe';
import { TestBed, async } from '@angular/core/testing';


fixture `Create Test`
    .page `http://localhost:4200/display`;

    // const gridData =  Selector('.k-grid');
    const addButton = Selector("#addbtn");

test('My Create Test',async t => {

  var randomName = new Date().getTime()+'';
  await t.click(addButton)
  .click(Selector('.k-textbox.ng-pristine').nth(0))
  .typeText(Selector('[role="gridcell"] .k-textbox.ng-pristine').nth(0), "name"+randomName)

  // .click(Selector('.k-textbox.ng-pristine').nth(0))
  .typeText(Selector('[role="gridcell"] .k-textbox.ng-pristine').nth(0), "Address")

  // .click(Selector('.k-textbox.ng-pristine').nth(0))
  .typeText(Selector('[role="gridcell"] .k-textbox.ng-pristine').nth(0), "98835680")

  // .click(Selector('.k-textbox.ng-pristine').nth(0))
  .typeText(Selector('[role="gridcell"] .k-textbox.ng-pristine').nth(0), "male")

  // .click(Selector('.k-textbox.ng-pristine').nth(0))
  .typeText(Selector('[role="gridcell"] .k-textbox.ng-pristine').nth(0), "https://i.cricketcb.com/stats/img/faceImages/265.jpg")

  .click(Selector('.k-button.k-grid-save-command').nth(0))
  .click(Selector('.k-textbox.ng-pristine').nth(0))
  .typeText(Selector('.k-textbox.ng-pristine').nth(0), "name"+randomName); //search box

  const gridSnapshot = await Selector('[role="gridcell"]').with({ timeout: 10000 });

  const cellcomparedata =await gridSnapshot.textContent;
  // console.log("cellcomparedata is",cellcomparedata);
  // await t.wait(3000);

  const data = "name"+randomName;
 await t.expect(cellcomparedata).contains(data,"Data is not valid");



});


// document.querySelectorAll('[role="gridcell"]').item(0).innerText;
