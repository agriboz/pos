import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, DebugElement } from '@angular/core';
import { DocumentGridComponent } from './document-grid.component';
import { DocumentStatePipe } from './document-state.pipe'
import { By } from '@angular/platform-browser';
import {
  ModuleDocument,
  ModuleDocumentState,
} from '../../models/index';


describe('DocumentGridComponent', () => {
  let component: DocumentGridComponent;
  let fixture: ComponentFixture<DocumentGridComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentGridComponent, DocumentStatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Fatura Dokümanları'`, () => {
    const expected = 'Fatura Dokümanları';
    de = fixture.debugElement.query(By.css('.form-viewer-title-spacer'));
    el = de.nativeElement;
    expect(el.textContent).toBe(expected);
  });

  it(`should have as table title 'Doküman Adı'`, () => {
    const expected = 'Doküman Adı';
    const documentModel: ModuleDocument = {
      id: 1,
      name: 'test',
      link: 'test link',
      state: 2,
      file: null
    }

    const documents = component.documents;

    documents.push(documentModel)

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.mat-header-cell'))
    el = de.nativeElement;
    expect(el.textContent).toBe(expected);
  });


});
