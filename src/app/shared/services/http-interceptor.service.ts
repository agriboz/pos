import { Injectable } from '@angular/core';
import {
  ConnectionBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Http,
  Headers,
} from '@angular/http';

import { ToastrService } from './toastr.service'
import { MdSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpInterceptorService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private toastr: ToastrService) {
    super(backend, defaultOptions);
  }

  request(
    url: string | Request,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.request(url, options).catch(this.catchErrors());
  }

  catchErrors() {
    return (res: Response) => {
      if (res.status === 400 || res.status === 401 || res.status === 500) {
         this.toastr.showToaster(res.statusText);
         return Observable.throw(res);
      }
      return Observable.throw(res);
    };
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.get(url, this.getRequestOptionArgs(options));
  }

  post(
    url: string,
    body: any,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    url = this.updateUrl(url);
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(
    url: string,
    body: any,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    url = this.updateUrl(url);
    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  private updateUrl(req: string) {
    return environment.origin + req;
  }

  private getRequestOptionArgs(
    options?: RequestOptionsArgs
  ): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
      options.headers.append('Content-Type', 'application/json');
    }
    options.withCredentials = true;

    const userName: string = sessionStorage.getItem('userName');

    if (!!userName) {
      options.headers.append('UserName', userName);
    }

    return options;
  }
}

