import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

import { DistributionComponent } from './distribution/distribution.component';
import { ToastrService } from '../shared/services';

import {
  VendorPayment,
  CommonList,
  StringCommonList,
  InvoiceItem,
  DistributionDetail,
  Result,
  ModuleRoute,
  ItemChangeState,
  ModuleDocument
} from '../shared/models';

import { DataService, DialogService } from '../shared/services';

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
  private routeState: ModuleRoute;

  constructor(
    private dataservice: DataService,
    private dialogservice: DialogService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.routeState = this.activatedRoute.snapshot.data['routeState'];
    const userName: string = this.activatedRoute.snapshot.queryParams.userName;

    sessionStorage.clear();

    if (userName !== undefined) {
      sessionStorage.setItem('userName', userName);
    }

    switch (this.routeState) {
      case ModuleRoute.Transformed:
        const eInvoiceId: number = this.activatedRoute.snapshot.params.id;
        this.getVendorPaymentByEInvoiceId(eInvoiceId);
        this.getDepartments();
        break;
      case ModuleRoute.Existed:
        const id: number = this.activatedRoute.snapshot.params.id;
        this.getVendorPaymentById(id);
        break;
      case ModuleRoute.New:
        this.getCompanies();
        this.getCurrencies();
        this.getDepartments();
        this.item.isManuel = false;
        this.item.id = 0;
        break;
    }
  }

  validate() {
    const errors: string[] = [];

    if (!this.item.processDate && this.item.isLastStep) {
      errors.push('İşlem tarihi alanı boş geçilemez');
    }
    if (!this.item.description) {
      errors.push('Açıklama alanı boş geçilemez');
    }
    if (!this.item.department || !this.item.department.id) {
      errors.push('Departman alanı boş geçilemez');
    }
    if (
      !this.item.invoiceItems ||
      this.item.invoiceItems.some(x => !x.distributionDetails)
    ) {
      errors.push('Dağıtım kalemleri girilmeden kayıt işlemi yapıalamz');
    }

    this.toastr.showToaster(errors.join(' // '));

    return errors.length === 0;
  }

  getCompanies() {
    this.dataservice.getCompanies().subscribe(data => (this.companies = data));
  }

  getCurrencies() {
    this.dataservice
      .getCurrencies()
      .subscribe(data => (this.currencies = data));
  }

  getStoppageAccounts(companyId: number) {
    this.dataservice
      .getStoppageAccounts(companyId)
      .subscribe(data => (this.stoppageAccounts = data));
  }

  getDepartments() {
    this.dataservice
      .getDepartments()
      .subscribe(data => (this.departments = data));
  }

  getVendorPaymentByEInvoiceId(eInvoiceId: number) {
    this.dataservice
      .getCompanies()
      .map(data => (this.companies = data))
      .flatMap(data =>
        this.dataservice.getCurrencies().map(x => (this.currencies = x))
      )
      .flatMap(data =>
        this.dataservice
          .getVendorPaymentByEInvoiceId(eInvoiceId)
          .map(x => (this.item = x))
      )
      .flatMap(data =>
        this.dataservice
          .getStoppageAccounts(data.company.id)
          .map(x => (this.stoppageAccounts = x))
      )
      .subscribe(data => (this.item.eInvoiceId = eInvoiceId));
  }

  getVendorPaymentById(id: number) {
    this.dataservice
      .getCompanies()
      .map(data => (this.companies = data))
      .flatMap(data =>
        this.dataservice.getCurrencies().map(x => (this.currencies = x))
      )
      .flatMap(data =>
        this.dataservice.getDepartments().map(x => (this.departments = x))
      )
      .flatMap(data =>
        this.dataservice.getVendorPaymentById(id).map(x => (this.item = x))
      )
      .flatMap(data =>
        this.dataservice
          .getStoppageAccounts(data.company.id)
          .map(x => (this.stoppageAccounts = x))
      )
      .subscribe();
  }

  addDistribution(invoiceItem: InvoiceItem) {
    const companyId: number = this.item.company.id;

    this.dialogservice
      .addDistribution(companyId, invoiceItem.id)
      .subscribe(data => {
        if (data) {
          if (!invoiceItem.distributionDetails) {
            invoiceItem.distributionDetails = [];
          }

          data.state = ItemChangeState.Added;
          invoiceItem.distributionDetails = [
            ...invoiceItem.distributionDetails,
            data
          ];
          this.toastr.showToaster('İşlem Başarılı');
        }
      });
  }

  companyChanged(e) {
    const companyId = e.value;
    this.getStoppageAccounts(companyId);
  }

  startFlow() {
    this.item.isSent = true;
    this.sentData();
  }

  save() {
    this.item.isSent = false;
    this.sentData();
  }

  sentData() {
    if (!this.validate()) {
      return;
    }

    if (this.routeState === ModuleRoute.New) {
      this.item.paymentDate = moment(this.item.paymentDate)
        .add('day', 1)
        .toDate();
      this.item.invoiceDate = moment(this.item.invoiceDate)
        .add('day', 1)
        .toDate();
    }

    if (this.item.id !== 0) {
      this.dataservice.putVendorPayment(this.item).subscribe(data => {
        this.raiseToastr(data);
        this.syncFiles();
      });
    } else {
      this.dataservice.postVendorPayment(this.item).subscribe(data => {
        this.raiseToastr(data);
        this.item.id = data.data;
        this.syncFiles();
      });
    }
  }

  syncFiles() {
    this.item.documents.map((item, i) => {
      switch (item.state) {
        case ItemChangeState.Added:
          if (item.isEInvoice) {
            this.dataservice
              .putEinvoiceDocument(this.item.id, this.item.eInvoiceId)
              .subscribe();
          } else {
            this.dataservice
              .putVendorPaymentDocument(this.item.id, item.file)
              .subscribe();
          }
          break;
        case ItemChangeState.Deleted:
          this.dataservice.deleteVendorPaymentDocument(item.id).subscribe();
          break;
      }
    });
  }

  approve() {
    this.item.processDate = moment(this.item.processDate).add('day', 1);
    this.dataservice
      .approveVendorPayment(this.item)
      .subscribe(data => this.raiseToastr(data));
  }

  reject() {
    this.dataservice
      .rejectVendorPayment(this.item)
      .subscribe(data => this.raiseToastr(data));
  }

  raiseToastr(result: Result) {
    this.toastr.showToaster(result.message);
  }

  fileChanged(e) {
    if (!this.item.documents) {
      this.item.documents = [];
    }

    const fileList: FileList = e.target.files;

    if (fileList.length > 0) {
      const document: ModuleDocument = new ModuleDocument();
      document.file = fileList[0];
      document.name =
        this.item.referenceNumber.toString() + '_' + document.file.name;
      document.state = ItemChangeState.Added;

      this.item.documents = [...this.item.documents, document];
    }
  }

  fileRemoved(e: ModuleDocument) {
    if (e.state === ItemChangeState.Added) {
      const index: number = this.item.documents.indexOf(e);
      this.item.documents.splice(index, 1);
    } else {
      e.state = ItemChangeState.Deleted;
    }
  }

  searchSupplier() {
    this.calculatePaymentDate();
  }

  addInvoiceItem() {
    this.dialogservice.addInvoiceItem(this.item.company.id).subscribe(data => {
      if (data) {
        if (!this.item.invoiceItems) {
          this.item.invoiceItems = [];
        }

        this.item.invoiceItems = [...this.item.invoiceItems, data];
      }
    });
  }

  deleteInvoiceItem(item) {
    item.state = ItemChangeState.Deleted;
    this.item.invoiceItems = [
      ...this.item.invoiceItems.slice(0, item.index),
      ...this.item.invoiceItems.slice(item.index + 1)
    ];
  }

  calculatePaymentDate() {
    if (this.item && this.item.supplier && this.item.invoiceDate) {
      this.item.paymentDate = moment(this.item.invoiceDate)
        .add('day', this.item.supplier.expiry)
        .toDate();
    }
  }
}
