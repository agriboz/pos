import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { DescriptionComponent } from './description.component';
import { DataService } from '../../services/data.service'
import { ReactiveFormsModule } from '@angular/forms';

describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MaterialModule, NoopAnimationsModule, ReactiveFormsModule ],
      declarations: [DescriptionComponent],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(fixture).toBeTruthy();
  });
});
