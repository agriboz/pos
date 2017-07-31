import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogModule, MdDialogRef, OverlayRef } from '@angular/material';

import { DistributionComponent } from './distribution.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DistributionComponent', () => {
  let component: DistributionComponent;
  let fixture: ComponentFixture<DistributionComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MaterialModule, MdDialogModule, BrowserAnimationsModule ],
      declarations: [DistributionComponent],
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

