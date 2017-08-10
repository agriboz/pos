import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import {
  VendorPayment,
  CommonList,
  VendorRoute
 } from '../../shared/models/index';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  @Input() item: VendorPayment;
  @Input() stoppageAccounts: CommonList[] = [];
  @Input() routeState: VendorRoute;
  @Output() onInvoiceDateChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  invoiceDateChanged() {
    this.onInvoiceDateChange.emit();
  }
}
