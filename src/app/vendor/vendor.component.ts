import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DistributionComponent } from './distribution/distribution.component';
import { ToastrService } from '../shared/services/toastr.service'

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
            , private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

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

  addDistribution(invoiceItem: InvoiceItem) {
    const companyId: number = this.item.company.id;

    this.dialogservice
      .addDistribution(companyId, invoiceItem.id)
      .subscribe(data => {
        if (data) {
          if (!invoiceItem.distributionDetails)
            invoiceItem.distributionDetails = [];

          invoiceItem.distributionDetails = [...invoiceItem.distributionDetails, data];
          this.toastr.showToaster('İşlem Başarılı');
        }
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

  saveAndSentApprove() {
    console.log(this.item);
  }

  save() {

  }

  approve() {

  }

  reject() {

  }

  newRecord() {

  }
}
