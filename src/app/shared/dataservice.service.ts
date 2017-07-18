import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Company } from '../models/company'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataserviceService {

  private API_URL = 'http://10.10.27.36:8091/api/'

  constructor(private http: Http) { }

  /* getCompanies() : Promise<Company[]> {
    return this.http.get(this.companiesUrl)
      .toPromise()
      .then(response => {
        return response.json().data as Company[];
      })
      .catch(this.handleError)
  } */

  getCompanies(): Observable<Company[]> {
    return this.http.get(this.API_URL + 'companies').map((response: Response) => {
      console.log(response);
      return <Company[]>response.json().data;
    }).catch(this.handleError)
  }

  getPaymentReasons(): Observable<Company[]> {
    return this.http.get(this.API_URL + 'paymentReasons').map((response: Response) => {
      console.log(response);
      return <Company[]>response.json().data;
    }).catch(this.handleError)
  }

  getCurrencies(): Observable<Company[]> {
    return this.http.get(this.API_URL + 'currencies').map((response: Response) => {
      console.log(response);
      return <Company[]>response.json().data;
    }).catch(this.handleError)
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occured', error);
    return Observable.throw(error.message || error);
  }

}
