import { SharedModule } from './../shared/modules/shared.module';
import { SupplierModule } from './../shared/components/supplier/supplier.module';
import { DescriptionModule } from './../shared/components/description/description.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material'

import { IndividualRoutingModule } from './individual-routing.module';

import { IndividualComponent } from './individual.component';
import { IndividualDetailComponent } from './individual-detail/individual-detail.component';
import { IndividualGridComponent } from './individual-grid/individual-grid.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IndividualRoutingModule,
    DescriptionModule,
    SupplierModule,
    SharedModule
  ],
  declarations: [
    IndividualComponent,
    IndividualDetailComponent,
    IndividualGridComponent
  ]
})
export class IndividualModule { }
