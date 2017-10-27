import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Observable } from 'rxJs/Rx'

import {
  CommonList,
  Description
} from '../../models';
import { DataService } from './../../services';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() item;
  @Input() companies: CommonList[] = [];
  @Input() currencies: CommonList[] = [];
  @Output() onCompanyChanged: EventEmitter<any> = new EventEmitter();

  private referenceNumbers: Map<number, number> = new Map<number, number>();

  constructor(private dataservice: DataService) { }

  ngOnInit() { }

  companyChanged(e) {
    const companyId = e.value;
    if (this.referenceNumbers.has(companyId)) {
      this.item.referenceNumber = this.referenceNumbers.get(companyId);
    } else {
      this.getReferenceNumber(companyId);
    }

    this.onCompanyChanged.emit(e);
  }

  getReferenceNumber(companyId: number) {
    this.dataservice
      .getReferenceNumber(4, companyId)
      .subscribe(data => {
        this.item.referenceNumber = data;
        this.referenceNumbers.set(companyId, this.item.referenceNumber);
      });
  }

}
