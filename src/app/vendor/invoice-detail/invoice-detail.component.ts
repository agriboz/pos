import { Component, Input, OnInit } from '@angular/core';

import {
  VendorPayment,
  CommonList
 } from '../../shared/models/index';

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
