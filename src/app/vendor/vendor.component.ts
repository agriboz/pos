import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DistributionComponent } from './distribution/distribution.component';

import {
  VendorPayment,
  CommonList,
  StringCommonList,
  InvoiceItem,
  DistributionDetail
} from '../shared/models';

import {
  DataService,
  DialogService
} from '../shared/services';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  providers: [DataService]
})
export class VendorComponent implements OnInit {

  private item: VendorPayment = new VendorPayment();
  private distributionDetail: DistributionDetail = new DistributionDetail();
  private companies: CommonList[] = [];
  private currencies: CommonList[] = [];
  private departments: StringCommonList[] = [];
  private stoppageAccounts: CommonList[] = [];
  private internalAccounts: CommonList[] = [];
  private externalAccounts: CommonList[] = [];
  private costCenters: CommonList[] = [];
  private internalOrders: CommonList[] = [];
  private referenceNumbers: Map<number, number> = new Map<number, number>();

  constructor(private dataservice: DataService
            , private dialogservice: DialogService
            , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const isTransform: boolean = this.activatedRoute.snapshot.data['isTransform'];
    
    if (isTransform) {
      const eInvoiceId: number = this.activatedRoute.snapshot.params.id;
      this.getVendorPayments(eInvoiceId);
    }
    else {
      const id: number = this.activatedRoute.snapshot.params.id;

      this.getCompanies();
      this.getCurrencies();
      this.getDepartments();
    }
  }

  getCompanies() {
    this.dataservice
      .getCompanies()
      .subscribe(data => this.companies = data);
  }

  getCurrencies() {
    this.dataservice
      .getCurrencies()
      .subscribe(data => this.currencies = data);
  }

  getReferenceNumber(companyId: number) {
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
  }

  getVendorPayments(eInvoiceId) {
    this.dataservice
      .getCompanies()
      .map(data => this.companies = data)
      .flatMap(data => this.dataservice.getCurrencies().map(x => this.currencies = x))
      .flatMap(data => this.dataservice.getVendorPayments(eInvoiceId).map(x => this.item = x))
      .subscribe();
  }

  addDistribution(e) {
    const invoiceItem: InvoiceItem = e;
    const companyId: number = this.item.company.id;

    this.dialogservice
      .addDistribution(companyId, invoiceItem.id)
      .subscribe(data => {
        if (!invoiceItem.distributionDetails)
          invoiceItem.distributionDetails = [];

        invoiceItem.distributionDetails.push(data);
      });
  }

  companyChanged(e) {
    const companyId = e.value;

    if (this.referenceNumbers.has(companyId)) {
      this.item.referenceNumber = this.referenceNumbers.get(companyId);
    } else {
      this.getReferenceNumber(companyId);
    }

    this.getStoppageAccounts(companyId);
  }
}
