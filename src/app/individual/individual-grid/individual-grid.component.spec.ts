import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualGridComponent } from './individual-grid.component';

describe('IndividualGridComponent', () => {
  let component: IndividualGridComponent;
  let fixture: ComponentFixture<IndividualGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
