import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndividualModule } from './individual/individual.module';
import {DataserviceService} from './shared/dataservice.service';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'AppComponent',
  },
];

@NgModule({

  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MdNativeDateModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    IndividualModule
  ],
  exports: [],
  providers: [DataserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
