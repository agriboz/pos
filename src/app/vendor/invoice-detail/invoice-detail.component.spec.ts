import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule, MdInputModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InvoiceDetailComponent } from './invoice-detail.component';

describe('InvoiceDetailComponent', () => {
  let component: InvoiceDetailComponent;
  let fixture: ComponentFixture<InvoiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ InvoiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
