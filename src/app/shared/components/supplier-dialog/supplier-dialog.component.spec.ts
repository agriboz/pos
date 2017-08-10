import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdDialogRef } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SupplierDialogComponent } from './supplier-dialog.component';

class MdDialogRefMock {

}

describe('SupplierDialogComponent', () => {
  let component: SupplierDialogComponent;
  let fixture: ComponentFixture<SupplierDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    providers: [
      {
          provide: MdDialogRef, useClass: MdDialogRefMock
        }
      ],
      imports: [ MaterialModule, FormsModule, BrowserAnimationsModule ],
      declarations: [ SupplierDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
