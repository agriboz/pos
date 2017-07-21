import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonList } from '../../models/common-list.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() item;
  @Input() companies: CommonList[] = [];
  @Input() currencies: CommonList[] = [];
  @Input() referenceNumber: number;
  @Output() onCompanyChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  companyChanged(e) {
    this.onCompanyChanged.emit(e);
  }

  ngOnInit() {
  }

}
