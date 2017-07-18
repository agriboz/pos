import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndividualComponent} from "./individual.component";

const routes: Routes = [
  {
    path: 'individual',
    component: IndividualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualRoutingModule { }
