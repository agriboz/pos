import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Company } from '../shared/company.model'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataserviceService {

  constructor(private http: Http) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get('companies').map((response: Response) => {
      console.log(response);
      return <Company[]>response.json().data;
    }).catch(this.handleError)
  }

  getPaymentReasons(): Observable<Company[]> {
    return this.http.get('paymentReasons').map((response: Response) => {
      console.log(response);
      return <Company[]>response.json().data;
    }).catch(this.handleError)
  }

  getCurrencies(): Observable<Company[]> {
    return this.http.get('currencies').map((response: Response) => {
      console.log(response);
      return <Company[]>response.json().data;
    }).catch(this.handleError)
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occured', error);
    return Observable.throw(error.message || error);
  }

}
