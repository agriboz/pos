import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CommonList } from '../shared/models/common-list.model'
import { StringCommonList } from '../shared/models/string-common-list.model'
import { VendorPayment } from '../shared/models/vendor-payment.model'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataserviceService {

  constructor(private http: Http) { }

  getPaymentReasons(): Observable<CommonList[]> {
    return this.http.get('paymentReasons').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getAccounts(companyId: number, isInternal: boolean): Observable<CommonList[]> {
    return this.http.get('accounts?companyId=' + companyId + '&isInternal=' + isInternal).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getCompanies(): Observable<CommonList[]> {
    return this.http.get('companies').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getCostCenters(companyId: number): Observable<CommonList[]> {
    return this.http.get('costCenters?companyId=' + companyId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getCurrencies(): Observable<CommonList[]> {
    return this.http.get('currencies').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getDepartments(): Observable<StringCommonList[]> {
    return this.http.get('departments').map((response: Response) => {
      return <StringCommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getHrBudgetTypes(): Observable<CommonList[]> {
    return this.http.get('hrBudgetTypes').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getHrMainAccounts(): Observable<CommonList[]> {
    return this.http.get('hrMainAccounts').map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getHrSubAccounts(mainAccountId: number): Observable<CommonList[]> {
    return this.http.get('hrSubAccounts?mainAccountId=' + mainAccountId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getInternalOrders(costCenterId: number): Observable<CommonList[]> {
    return this.http.get('internalOrders?costCenterId=' + costCenterId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getReferenceNumber(moduleId: number, companyId: number): Observable<number> {
    return this.http.get('referenceNumbers?moduleId=' + moduleId + '&companyId=' + companyId).map((response: Response) => {
      return <number>response.json().data;
    }).catch(this.handleError)
  }

  getStoppageAccounts(companyId: number): Observable<CommonList[]> {
    return this.http.get('stoppageAccounts?companyId=' + companyId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getTaxGroups(companyId: number): Observable<CommonList[]> {
    return this.http.get('taxGroups?companyId=' + companyId).map((response: Response) => {
      return <CommonList[]>response.json().data;
    }).catch(this.handleError)
  }

  getVendorPayments(eInvoiceId: number): Observable<VendorPayment> {
    return this.http.get('transform?eInvoiceId=' + eInvoiceId).map((response: Response) => {
      return <VendorPayment>response.json().data;
    }).catch(this.handleError)
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occured', error);
    return Observable.throw(error.message || error);
  }

}
