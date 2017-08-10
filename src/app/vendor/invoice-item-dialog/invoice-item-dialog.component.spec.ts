import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItemDialogComponent } from './invoice-item-dialog.component';
import { MdDialogRef, MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MdDialogRefMock {

}

describe('InvoiceItemDialogComponent', () => {
  let component: InvoiceItemDialogComponent;
  let fixture: ComponentFixture<InvoiceItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MaterialModule, BrowserAnimationsModule ],
      providers: [
        {
          provide: MdDialogRef, useClass: MdDialogRefMock
        }
      ],
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
