import { Component, Input, Output, OnInit, ViewChild, Pipe, EventEmitter } from '@angular/core';

import { DocumentStatePipe } from './document-state.pipe';
import { environment } from '../../../environments/environment';

import {
  ModuleDocument,
  ModuleDocumentState,
  VendorPayment
} from '../../models/index';

@Component({
  selector: 'app-document-grid',
  templateUrl: './document-grid.component.html',
  styleUrls: ['./document-grid.component.css']
})
export class DocumentGridComponent implements OnInit {

  private item: ModuleDocument[] = [];
  private baseUrl: string;

  @ViewChild('fileInput') fileInput;
  @Input() documents: ModuleDocument[] = [];
  @Output() onFileChanged: EventEmitter<any> = new EventEmitter();
  @Output() onFileRemoved: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.baseUrl = environment.origin;
   }

  ngOnInit() { }

  remove(e) {
    this.onFileRemoved.emit(e);
  }

  fileChange(e) {
    this.onFileChanged.emit(e);
    this.fileInput.nativeElement.value = '';
  }
}
