import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DistributionComponent } from './distribution/distribution.component';

import { VendorPayment } from '../shared/models/vendor-payment.model';
import { CommonList } from '../shared/models/common-list.model';
import { StringCommonList } from '../shared/models/string-common-list.model';
import { DataserviceService } from '../shared/dataservice.service'
import { InvoiceItem } from '../shared/models/invoice-item.model';
import { DistributionDetail } from '../shared/models/distribution-detail.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  providers: [DataserviceService],
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

  constructor(private dataservice: DataserviceService, private activatedRoute: ActivatedRoute, private dialog: MdDialog) { }

  ngOnInit() {
    const eInvoiceId = this.activatedRoute.snapshot.params.id;
    if (eInvoiceId) {
      this.getVendorPayments(eInvoiceId);
    }
    else {
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
    const invoiceItemId = e.value;

    this.dataservice
      .getAccounts(this.item.company.id, true)
      .map(data => this.internalAccounts = data)
      .flatMap(data => this.dataservice.getAccounts(this.item.company.id, false).map(x => this.externalAccounts = x))
      .flatMap(data => this.dataservice.getCostCenters(this.item.company.id).map(x => this.costCenters = x))
      .subscribe(data => {
        let dialogRef = this.dialog.open(DistributionComponent);
        dialogRef.componentInstance.item = new DistributionDetail();
        dialogRef.componentInstance.costCenters = this.costCenters;
        dialogRef.componentInstance.internalAccounts = this.internalAccounts;
        dialogRef.componentInstance.externalAccounts = this.externalAccounts;
        dialogRef.componentInstance
          .onCostCenterChanged
          .flatMap(data => this.dataservice.getInternalOrders(data.value).map(x => this.internalOrders = x))
          .subscribe(e => dialogRef.componentInstance.internalOrders = this.internalOrders);

        dialogRef.afterClosed().subscribe(result => {

        });
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
