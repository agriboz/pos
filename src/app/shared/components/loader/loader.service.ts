import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoaderState } from '../../models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  displayLoader(value: boolean) {
    this.loaderStatus.next(value);
  } /*  */
}
