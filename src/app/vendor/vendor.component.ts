import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VendorPayment } from '../shared/models/vendor-payment.model';
import { CommonList } from '../shared/models/common-list.model';
import { StringCommonList } from '../shared/models/string-common-list.model';
import { DataserviceService } from '../shared/dataservice.service'
import { InvoiceItem } from '../shared/models/invoice-item.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  providers: [DataserviceService],
})
export class VendorComponent implements OnInit {

  item = {}
  companies: CommonList[] = [];
  currencies: CommonList[] = [];
  /* private departments: StringCommonList[] = [];
  private stoppageAccounts: CommonList[] = [];
  private referenceNumbers: Map<number, number> = new Map<number, number>(); */

  constructor(private dataservice: DataserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const eInvoiceId = this.activatedRoute.snapshot.params.id;
    this.getCompanies();
    this.getCurrencies();
    this.getVendorPayments(eInvoiceId)
    /* this.getDepartments(); */
  }

  getCompanies() {
    this.dataservice
      .getCompanies()
      .delay(5000)
      .subscribe(data => this.companies = data);
  }

  getCurrencies() {
    this.dataservice
      .getCurrencies()
      .subscribe(data => this.currencies = data);
  }

  /* getReferenceNumber(companyId: number) {
    this.dataservice
      .getReferenceNumber(4, companyId)
      .subscribe(data => {
        this.item.referenceNumber = data;
        this.referenceNumbers.set(companyId, this.item.referenceNumber);
      });
  }

  getStoppageAccounts(companyId: number) {
    this.dataservice
      .getStoppageAccounts(companyId)
      .subscribe(data => this.stoppageAccounts = data);
  }

  getDepartments() {
    this.dataservice
      .getDepartments()
      .subscribe(data => this.departments = data);
  } */

  getVendorPayments(eInvoiceId) {
    this.dataservice.getVendorPayments(eInvoiceId)
      .subscribe(data => this.item = data);
  }

  /* companyChanged(e) {
    const companyId = e.value;

    if (this.referenceNumbers.has(companyId)) {
      this.item.referenceNumber = this.referenceNumbers.get(companyId);
    } else {
      this.getReferenceNumber(companyId);
    }

    this.getStoppageAccounts(companyId);
  } */
}
