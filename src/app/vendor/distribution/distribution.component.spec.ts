import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogModule, MdDialogRef, OverlayRef, OverlayContainer } from '@angular/material';

import { DistributionComponent } from './distribution.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DistributionComponent', () => {
  let component: DistributionComponent;
  let fixture: ComponentFixture<DistributionComponent>;
  let dialog: MdDialog;
  let overlayContainerElement: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionComponent ],
      imports: [FormsModule, MaterialModule, MdDialogModule, BrowserAnimationsModule],
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionComponent);
    component = fixture.componentInstance;


    dialog = TestBed.get(MdDialog)
    let dialogRef = dialog.open(DistributionComponent);



    fixture.detectChanges();
  });

  it('should be created', () => {

    expect(component).toBeTruthy();
  });
});

