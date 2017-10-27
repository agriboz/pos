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
import { IndividualListComponent } from './individual-list/individual-list.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IndividualRoutingModule,
    DescriptionModule,
    SupplierModule
  ],
  declarations: [
    IndividualComponent,
    IndividualDetailComponent,
    IndividualListComponent
  ]
})
export class IndividualModule { }
