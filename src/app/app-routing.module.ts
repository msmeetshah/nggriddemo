import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemocmpComponent } from './democmp/democmp.component';


const routes: Routes = [

  { path: 'display', component: DemocmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
