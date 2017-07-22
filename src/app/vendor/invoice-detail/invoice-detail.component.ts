import { Component, Input, OnInit } from '@angular/core';

import { VendorPayment } from '../../shared/models/vendor-payment.model';
import { CommonList } from '../../shared/models/common-list.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  @Input() item: VendorPayment;
  @Input() stoppageAccounts: CommonList[] = [];

  constructor() { }

  ngOnInit() {
  }

}
