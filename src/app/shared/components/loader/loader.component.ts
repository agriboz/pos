import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';

import { LoaderState } from '../../models/index';

@Component({
  selector: 'app-angular-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  show: boolean;

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.show = false;
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderStatus.subscribe(
      (state) => {
        console.log(state);
        this.show = state;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
