import { Selector } from 'testcafe';
import { TestBed, async } from '@angular/core/testing';


fixture `Delete Test`
    .page `http://localhost:4200/display`;


    test('My Create Test',async t => {

      await t .setNativeDialogHandler(() => false)
      .click(Selector('.k-button.k-grid-remove-command'))

      const tmp = await Selector('[role="gridcell"]').textContent;
      console.log("tmp of 0 is ",tmp);
      //  var que = 'Confirm?'

        //  await t
        //      .setNativeDialogHandler((type, text) => {
        //          if (type === 'confirm' && text === que)
        //              return true;

        //          return null;
        //      }, { dependencies: { que } })
        //      .click(delBtn);


  //   await t.click()
  //  .setNativeDialogHandler((type: any) => {
  //         switch(type){
  //           case 'confirm':
  //             console.log("ok click",type);
  //         }
  //       });

});


//var temp = document.querySelectorAll('.k-button.k-grid-remove-command'); console.log(temp); var t; for(i=0;i<temp.length;i++){ t = document.querySelectorAll('.k-button.k-grid-remove-command').item(i); console.log(t);  }
