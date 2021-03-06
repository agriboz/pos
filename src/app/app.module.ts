import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderService } from './shared/components/loader/loader.service';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndividualModule } from './individual/individual.module';
import { VendorModule } from './vendor/vendor.module';
import { DataService } from './shared/services/data.service';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { httpService } from './http.service';
import { CdkTableModule } from '@angular/cdk';
import { ToastrService } from './shared/services/toastr.service';
import { DialogService } from './shared/services/dialog.service';
//import 'hammerjs';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'AppComponent',
  },
];

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    IndividualModule,
    VendorModule,
    CdkTableModule
  ],
  providers: [
    DataService,
    HttpInterceptorService,
    ToastrService,
    {
      provide: Http,
      useFactory: httpService,
      deps: [XHRBackend, RequestOptions, ToastrService, LoaderService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
