import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItemDialogComponent } from './invoice-item-dialog.component';

describe('InvoiceItemDialogComponent', () => {
  let component: InvoiceItemDialogComponent;
  let fixture: ComponentFixture<InvoiceItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
