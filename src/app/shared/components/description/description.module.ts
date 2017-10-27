import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DescriptionComponent } from './description.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    DescriptionComponent
  ],
  exports: [
    DescriptionComponent
  ]
})
export class DescriptionModule { }
