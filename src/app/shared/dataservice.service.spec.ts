import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DataserviceService } from './dataservice.service';

describe('DataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DataserviceService]
    });
  });

  it('should be created', inject([DataserviceService], (service: DataserviceService) => {
    expect(service).toBeTruthy();

  }));
});
