import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MaterialModule
} from '@angular/material'

import { IndividualRoutingModule } from './individual-routing.module';
import { IndividualComponent } from './individual.component';
import { GeneralDescriptionComponent } from './general-description/general-description.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IndividualRoutingModule,
  ],
  providers: [],
  exports: [IndividualComponent, GeneralDescriptionComponent],
  declarations: [IndividualComponent, GeneralDescriptionComponent]
})
export class IndividualModule { }
