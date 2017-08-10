import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DistributionComponent } from './distribution/distribution.component';
import { ToastrService } from '../shared/services/toastr.service'

import {
  VendorPayment,
  CommonList,
  StringCommonList,
  InvoiceItem,
  DistributionDetail,
  Result,
  VendorRoute,
  ModuleDocumentState,
  ModuleDocument
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
  private routeState: VendorRoute;

  constructor(private dataservice: DataService
    , private dialogservice: DialogService
    , private activatedRoute: ActivatedRoute
    , private toastr: ToastrService) { }

  ngOnInit() {
    this.routeState = this.activatedRoute.snapshot.data['routeState'];
    const userName: string = this.activatedRoute.snapshot.queryParams.userName;

    sessionStorage.clear();

    if (userName != undefined) {
      sessionStorage.setItem("userName", userName);
    }

    switch (this.routeState) {
      case VendorRoute.Transformed:
        const eInvoiceId: number = this.activatedRoute.snapshot.params.id;
        this.getVendorPaymentByEInvoiceId(eInvoiceId);
        this.getDepartments();
        break;
      case VendorRoute.Existed:
        const id: number = this.activatedRoute.snapshot.params.id;
        this.getVendorPaymentById(id);
        break;
      case VendorRoute.New:
        this.getCompanies();
        this.getCurrencies();
        this.getDepartments();
        this.item.isManuel = false;
        break;
    }
  }

  validate() {
    let errors: string[] = [];

    if (!this.item.description)
      errors.push("Açıklama alanı boş geçilemez");
    if (!this.item.department || !this.item.department.id)
      errors.push("Departman alanı boş geçilemez");
    if (!this.item.invoiceItems || this.item.invoiceItems.some(x => !x.distributionDetails))
      errors.push("Dağıtım kalemleri girilmeden kayıt işlemi yapıalamz");

    this.toastr.showToaster(errors.join(' // '));

    return errors.length == 0;
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

  getVendorPaymentByEInvoiceId(eInvoiceId: number) {
    this.dataservice
      .getCompanies()
      .map(data => this.companies = data)
      .flatMap(data => this.dataservice.getCurrencies().map(x => this.currencies = x))
      .flatMap(data => this.dataservice.getVendorPaymentByEInvoiceId(eInvoiceId).map(x => this.item = x))
      .flatMap(data => this.dataservice.getStoppageAccounts(data.company.id).map(x => this.stoppageAccounts = x))
      .subscribe();
  }

  getVendorPaymentById(id: number) {
    this.dataservice
      .getCompanies()
      .map(data => this.companies = data)
      .flatMap(data => this.dataservice.getCurrencies().map(x => this.currencies = x))
      .flatMap(data => this.dataservice.getDepartments().map(x => this.departments = x))
      .flatMap(data => this.dataservice.getVendorPaymentById(id).map(x => this.item = x))
      .flatMap(data => this.dataservice.getStoppageAccounts(data.company.id).map(x => this.stoppageAccounts = x))
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

  startFlow() {
    this.item.isSent = true;
    this.sentData();
  }

  save() {
    this.item.isSent = false;
    this.sentData();
  }

  sentData() {
    console.log(this.item);

    if (!this.validate())
      return;

    if (this.item.id != 0) {
      this.dataservice
        .putVendorPayment(this.item)
        .subscribe(data => {
          this.raiseToastr(data)
          this.syncFiles();
        });
    }
    else {
      this.dataservice
        .postVendorPayment(this.item)
        .subscribe(data => {
          this.raiseToastr(data);
          this.item.id = data.data;
          this.syncFiles();
        });
    }
  }

  syncFiles() {
    this.item.documents.map((item, i) => {
      switch(item.state) {
        case ModuleDocumentState.Added:
          this.dataservice
            .putVendorPaymentDocument(this.item.id, item.file)
            .subscribe();
          break;
        case ModuleDocumentState.Deleted:
          this.dataservice
            .deleteVendorPaymentDocument(item.id)
            .subscribe();
          break;
      }
    });
  }

  approve() {
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
    //if (!result.isSucceeded)
    this.toastr.showToaster(result.message);
  }

  newRecord() {

  }

  fileChanged(e) {
    if (!this.item.documents) {
      this.item.documents = [];
    }

    let fileList: FileList = e.target.files;

    if (fileList.length > 0) {
      let document: ModuleDocument = new ModuleDocument();
      document.file = fileList[0];
      document.name = this.item.referenceNumber.toString() + '_' + document.file.name;
      document.state = ModuleDocumentState.Added;

      this.item.documents = [...this.item.documents, document];
    }
  }

  fileRemoved(e: ModuleDocument) {
    if (e.state == ModuleDocumentState.Added) {
      let index: number = this.item.documents.indexOf(e);
      this.item.documents.splice(index, 1);
    } else {
      e.state = ModuleDocumentState.Deleted;
    }
  }
}
