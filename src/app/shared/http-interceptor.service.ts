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

import { MdSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';


@Injectable()


export class HttpInterceptorService extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {

    super(backend, defaultOptions);
  }

  request(
    url: string | Request,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.request(url, options).catch(this.catchErrors());
  }

  private catchErrors() {
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403 ||  res.status === 0) {
        console.log('Error_Token_Expired: redirecting to login.');
      }
      return Observable.throw(res);
    };
  }

  public snackBarMethod() {

  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    console.log(url);
    return super.get(url, this.getRequestOptionArgs(options));
  }

  post(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    url = this.updateUrl(url);
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(
    url: string,
    body: string,
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
    }
    options.headers.append('Content-Type', 'application/json');
    return options;
  }
}
