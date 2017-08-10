import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogModule, MdDialogRef, OverlayRef, OverlayContainer } from '@angular/material';

import { DistributionComponent } from './distribution.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MdDialogRefMock {

}

describe('DistributionComponent', () => {
  let component: DistributionComponent;
  let fixture: ComponentFixture<DistributionComponent>;
  let mdDialogSpy = jasmine.createSpy('MdDialogRef');

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistributionComponent],
      providers: [
        {
          provide: MdDialogRef, useClass: MdDialogRefMock
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [FormsModule, MaterialModule, MdDialogModule, BrowserAnimationsModule],
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {

    expect(component).toBeTruthy();
  });
});

