import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { ModuleRoute } from '../shared/models';

const routes: Routes = [
  {
    path: 'vendor/:id',
    component: VendorComponent,
    data: { routeState: ModuleRoute.Existed }
  },
  {
    path: 'vendor/transform/:id',
    component: VendorComponent,
    data: { routeState: ModuleRoute.Transformed }
  },
  {
    path: 'vendor',
    component: VendorComponent,
    data: { routeState: ModuleRoute.New }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
