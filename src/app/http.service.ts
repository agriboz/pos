import { XHRBackend, Http, RequestOptions } from '@angular/http';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { ToastrService } from './shared/services/toastr.service'

export function httpService(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions,
  toastr: ToastrService
): Http {

  return new HttpInterceptorService(xhrBackend, requestOptions, toastr);
}
