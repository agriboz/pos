import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';

const routes: Routes = [
  {
    path: 'vendor/:id',
    component: VendorComponent,
    data: { isTransform: false }
  },
  {
    path: 'vendor/transform/:id',
    component: VendorComponent,
    data: { isTransform: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
