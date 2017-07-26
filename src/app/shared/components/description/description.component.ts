import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

import { Observable } from 'rxJs/Rx'
import { CommonList } from '../../models/common-list.model';
import { Description } from '../../models/description.model';
import { VendorPayment } from '../../models/vendor-payment.model'

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

  constructor() { }

  companyChanged(e) {
    this.onCompanyChanged.emit(e);
  }

  ngOnInit() {

  }

}
