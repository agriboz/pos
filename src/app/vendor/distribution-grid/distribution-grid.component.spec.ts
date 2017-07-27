import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionGridComponent } from './distribution-grid.component';

describe('DistributionGridComponent', () => {
  let component: DistributionGridComponent;
  let fixture: ComponentFixture<DistributionGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
