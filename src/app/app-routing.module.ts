import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemocmpComponent } from './democmp/democmp.component';
import { KendotestcmpComponent } from './kendotestcmp/kendotestcmp.component';


const routes: Routes = [

  {path: '',component: DemocmpComponent},
  { path: 'display', component: DemocmpComponent },
  { path: 'kendotest', component: KendotestcmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
