import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DistributionGridComponent } from '../distribution-grid/distribution-grid.component'

import { CollapsibleWellComponent } from './collapsible-well.component';

describe('CollapsibleWellComponent', () => {
  let component: CollapsibleWellComponent;
  let fixture: ComponentFixture<CollapsibleWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DistributionGridComponent, CollapsibleWellComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
