import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualComponent } from './individual.component';
import { ModuleRoute } from './../shared/models';

const routes: Routes = [
  {
    path: 'individual/:id',
    component: IndividualComponent,
    data: { routeState: ModuleRoute.Existed }
  },
  {
    path: 'individual',
    component: IndividualComponent,
    data: { routeState: ModuleRoute.New }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualRoutingModule { }
