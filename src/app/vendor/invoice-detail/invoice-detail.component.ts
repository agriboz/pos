import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import {
  VendorPayment,
  CommonList,
  ModuleRoute
 } from '../../shared/models';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  @Input() item: VendorPayment;
  @Input() stoppageAccounts: CommonList[] = [];
  @Input() routeState: ModuleRoute;
  @Output() onInvoiceDateChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    this.item.processDate = new Date(this.item.processDate);
  }

  invoiceDateChanged() {
    this.onInvoiceDateChange.emit();
  }
}
