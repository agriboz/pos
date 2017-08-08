import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { VendorRoute } from '../shared/models/index';

const routes: Routes = [
  {
    path: 'vendor/:id',
    component: VendorComponent,
    data: { routeState: VendorRoute.Existed }
  },
  {
    path: 'vendor/transform/:id',
    component: VendorComponent,
    data: { routeState: VendorRoute.Transformed }
  },
  {
    path: 'vendor',
    component: VendorComponent,
    data: { routeState: VendorRoute.New }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
