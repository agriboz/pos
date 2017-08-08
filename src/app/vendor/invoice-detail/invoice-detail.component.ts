import { Component, Input, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
  }

}
