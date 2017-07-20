import { XHRBackend, Http, RequestOptions } from '@angular/http';
import { HttpInterceptorService } from './shared/http-interceptor.service';

export function httpService(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions
): Http {
  return new HttpInterceptorService(xhrBackend, requestOptions);
}
