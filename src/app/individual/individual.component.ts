import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import {
  CommonList,
  IndividualPayment,
  ModuleRoute,
  ItemChangeState,
  IndividualPaymentDetail
} from '../shared/models';
import { DataService } from '../shared/services'


@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
  providers: [DataService],
})
export class IndividualComponent implements OnInit {
  private item: IndividualPayment = new IndividualPayment();
  private companies: CommonList[] = [];
  private currencies: CommonList[] = [];
  private paymentReasons: CommonList[] = [];
  private supplierAccounts: CommonList[] = [];
  private routeState: ModuleRoute;

  constructor(private dataservice: DataService
            , private activatedRoute: ActivatedRoute) {
    this.routeState = this.activatedRoute.snapshot.data['routeState'];
  }

  ngOnInit() {
    this.getCompanies();
    this.getCurrencies();
    this.getPaymentReason();
  }

  getCompanies() {
    this.dataservice
      .getCompanies()
      .subscribe(data => this.companies = data);
  }

  getCurrencies() {
    this.dataservice
      .getCurrencies()
      .subscribe(data => this.currencies = data);
  }

  getPaymentReason() {
    this.dataservice
      .getPaymentReasons()
      .subscribe(data => this.paymentReasons = data);
  }

  onDetailAdded(data: IndividualPaymentDetail) {
    data.state = ItemChangeState.Added;
    data.transferState = 'Aktarılmadı';
    this.item.details = [...this.item.details, data];

    console.log(this.item.details);
  }

  searchSupplier(e) {
    console.log('searchSupplier tetiklendi');
/*     const supplierId: number = e.value;

    this.dataservice
      .getSupplierAccounts(this.item.currency.id, supplierId)
      .subscribe(data => this.supplierAccounts = data); */
  }
}
