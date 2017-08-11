import { LoaderService } from './shared/components/loader/loader.service';
import { XHRBackend, Http, RequestOptions } from '@angular/http';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { ToastrService } from './shared/services/toastr.service'

export function httpService(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions,
  toastr: ToastrService,
  loaderService: LoaderService
): Http {

  return new HttpInterceptorService(xhrBackend, requestOptions, toastr, loaderService);
}
