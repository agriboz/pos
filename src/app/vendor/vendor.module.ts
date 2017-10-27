import { SupplierModule } from './../shared/components/supplier/supplier.module';
import { DescriptionModule } from './../shared/components/description/description.module';
import { LoaderService } from './../shared/components/loader/loader.service';
import { LoaderComponent } from './../shared/components/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, DateAdapter } from '@angular/material'

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { DescriptionComponent } from '../shared/components/description/description.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { DistributionComponent } from './distribution/distribution.component';
import { DialogService } from '../shared/services/dialog.service';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { DistributionGridComponent } from './distribution-grid/distribution-grid.component';
import { DocumentGridComponent } from '../shared/components/document-grid/document-grid.component';
import { SupplierDialogComponent } from '../shared/components/supplier-dialog/supplier-dialog.component';
import { ItemStatePipe } from '../shared/pipes/item-state.pipe';
import { InvoiceItemDialogComponent } from './invoice-item-dialog/invoice-item-dialog.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    VendorRoutingModule,
    DescriptionModule,
    SupplierModule
  ],
  entryComponents: [
    DistributionComponent,
    SupplierDialogComponent,
    InvoiceItemDialogComponent
  ],
  providers: [
    DialogService,
    LoaderService
  ],
  declarations: [
    VendorComponent,
    InvoiceDetailComponent,
    DistributionComponent,
    CollapsibleWellComponent,
    DistributionGridComponent,
    DocumentGridComponent,
    SupplierDialogComponent,
    ItemStatePipe,
    InvoiceItemDialogComponent
  ]
})
export class VendorModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('tr')
  }
}
