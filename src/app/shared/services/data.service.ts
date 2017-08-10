import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {
  CommonList,
  StringCommonList,
  VendorPayment,
  Result,
  SupplierSearch,
  Supplier
} from '../models/index';

@Injectable()
export class DataService {

  constructor(public http: Http) { }

  getPaymentReasons(): Observable<CommonList[]> {
    return this.http.get('paymentReasons').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getAccounts(companyId: number, isInternal: boolean): Observable<CommonList[]> {
    return this.http.get('accounts?companyId=' + companyId + '&isInternal=' + isInternal).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getCompanies(): Observable<CommonList[]> {
    return this.http.get('companies').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getCostCenters(companyId: number): Observable<CommonList[]> {
    return this.http.get('costCenters?companyId=' + companyId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getCurrencies(): Observable<CommonList[]> {
    return this.http.get('currencies').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getDepartments(): Observable<StringCommonList[]> {
    return this.http.get('departments').map((response: Response) => {
      return <StringCommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getHrBudgetTypes(): Observable<CommonList[]> {
    return this.http.get('hrBudgetTypes').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getHrMainAccounts(): Observable<CommonList[]> {
    return this.http.get('hrMainAccounts').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getHrSubAccounts(mainAccountId: number): Observable<CommonList[]> {
    return this.http.get('hrSubAccounts?mainAccountId=' + mainAccountId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getInternalOrders(costCenterId: number): Observable<CommonList[]> {
    return this.http.get('internalOrders?costCenterId=' + costCenterId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getReferenceNumber(moduleId: number, companyId: number): Observable<number> {
    return this.http.get('referenceNumbers?moduleId=' + moduleId + '&companyId=' + companyId).map((response: Response) => {
      return <number>response.json().data;
    }).catch(this.handleError);
  }

  getStoppageAccounts(companyId: number): Observable<CommonList[]> {
    return this.http.get('stoppageAccounts?companyId=' + companyId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getTaxGroups(companyId: number): Observable<CommonList[]> {
    return this.http.get('taxGroups?companyId=' + companyId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError);
  }

  getVendorPaymentByEInvoiceId(eInvoiceId: number): Observable<VendorPayment> {
    return this.http.get('transform?eInvoiceId=' + eInvoiceId).map((response: Response) => {
      return <VendorPayment>response.json().data;
    }).catch(this.handleError);
  }

  getVendorPaymentById(id: number): Observable<VendorPayment> {
    return this.http.get(id.toString()).map((response: Response) => {
      return <VendorPayment>response.json().data;
    }).catch(this.handleError);
  }

  postVendorPayment(vendorPayment: VendorPayment): Observable<Result> {
    return this.http.post('', vendorPayment).map((response: Response) => {
      return response.json().data;
    }).catch(this.handleError);
  }

  putVendorPayment(vendorPayment: VendorPayment): Observable<Result> {
    return this.http.put(vendorPayment.id.toString(), vendorPayment).map((response: Response) => {
      return response.json().data;
    }).catch(this.handleError);
  }

  approveVendorPayment(vendorPayment: VendorPayment): Observable<Result> {
    return this.http.put('Approve/' + vendorPayment.id.toString(), vendorPayment).map((response: Response) => {
      return response.json().data;
    }).catch(this.handleError);
  }

  rejectVendorPayment(vendorPayment: VendorPayment): Observable<Result> {
    return this.http.put('Reject/' + vendorPayment.id.toString(), vendorPayment).map((response: Response) => {
      return response.json().data;
    }).catch(this.handleError);
  }

  putVendorPaymentDocument(vendorPaymentId: number, file: File): Observable<Result> {
    let formData: FormData = new FormData();  
    formData.append('uploadFile', file, file.name);  

    let options: RequestOptions = new RequestOptions();
    options.headers = new Headers();

    return this.http.put('Document/' + vendorPaymentId.toString(), formData, options).map((response: Response) => {
      return response.json().data;
    }).catch(this.handleError);
  }

  deleteVendorPaymentDocument(documentId: number): Observable<Result> {
    return this.http.delete('Document/' + documentId.toString()).map((response: Response) => {
      return response.json().data;
    }).catch(this.handleError);
  }

  getSupplierList(supplierSearch: SupplierSearch): Observable<Supplier[]> {
    let url: string = 'Suppliers/';
    url += '?CompanyId=' + supplierSearch.companyId;
    url += '&AccountNumber=' + supplierSearch.accountNumber;
    url += '&Name=' + supplierSearch.name;

    return this.http.get(url).map((response: Response) => {
      return response.json().data;
    }).catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occured', error);
    return Observable.throw(error.message || error);
  }

}
