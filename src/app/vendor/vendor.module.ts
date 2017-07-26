import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material'

import { CdkTableModule } from '@angular/cdk';
import {DataSource} from '@angular/cdk';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { DescriptionComponent } from '../shared/components/description/description.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { SupplierComponent } from '../shared/components/supplier/supplier.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { DistributionComponent } from './distribution/distribution.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    VendorRoutingModule,
    CdkTableModule,
  ],
  entryComponents: [
    DistributionComponent
  ],
  declarations: [
    VendorComponent,
    DescriptionComponent,
    InvoiceDetailComponent,
    SupplierComponent,
    InvoiceItemComponent,
    DistributionComponent,
  ]
})
export class VendorModule { }
