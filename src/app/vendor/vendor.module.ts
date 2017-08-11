import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material'

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { DescriptionComponent } from '../shared/components/description/description.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { SupplierComponent } from '../shared/components/supplier/supplier.component';
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
  ],
  entryComponents: [
    DistributionComponent,
    SupplierDialogComponent,
    InvoiceItemDialogComponent
  ],
  providers: [
    DialogService
  ],
  declarations: [
    VendorComponent,
    DescriptionComponent,
    InvoiceDetailComponent,
    SupplierComponent,
    DistributionComponent,
    CollapsibleWellComponent,
    DistributionGridComponent,
    DocumentGridComponent,
    SupplierDialogComponent,
    ItemStatePipe,
    InvoiceItemDialogComponent
  ]
})
export class VendorModule { }
