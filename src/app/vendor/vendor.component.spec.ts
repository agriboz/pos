import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpModule,
  Http,
  BaseRequestOptions,
  XHRBackend,
} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from '../shared/services/dialog.service';
import { DataService } from '../shared/services/data.service';
import { ToastrService } from '../shared/services/toastr.service';
import { VendorComponent } from './vendor.component';
import { fakeAsync } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

describe('VendorComponent', () => {
  let component: VendorComponent;
  let fixture: ComponentFixture<VendorComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialModule,
          FormsModule,
          HttpModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
        providers: [
          DialogService,
          DataService,
          ToastrService,
          { provide: XHRBackend, useClass: MockBackend },

        ],
        declarations: [VendorComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it(
    'should be created',
    async(() => {
      expect(component).toBeTruthy();
    })
  );

  it(`should have title as 'Genel Bilgiler'`, () => {
    const expected = 'Genel Bilgiler';
    de = fixture.debugElement.query(By.css('.form-viewer-title-spacer'))
    el = de.nativeElement;

    expect(el.textContent).toBe(expected)

  });

  it(`ìt should have 'isSent' false`, async(() => {
    component['item'].isSent = true;
    component.save()
    fixture.detectChanges();

    expect(component['item'].isSent).toBe(false)

  }));

  it(`ìt should have 'isSent' true`, async(() => {
    component['item'].isSent = false;
    component.startFlow();
    fixture.detectChanges();

    expect(component['item'].isSent).toBe(true)

  }));

});
