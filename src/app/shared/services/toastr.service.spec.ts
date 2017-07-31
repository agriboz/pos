import { TestBed, inject } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { ToastrService } from './toastr.service';

describe('ToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [ToastrService]
    });
  });

  it('should be created', inject([ToastrService], (service: ToastrService) => {
    expect(service).toBeTruthy();
  }));
});
