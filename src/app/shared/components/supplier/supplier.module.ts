import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SupplierComponent } from './supplier.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    SupplierComponent
  ],
  exports: [
    SupplierComponent
  ]
})
export class SupplierModule { }
