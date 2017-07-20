import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Company } from '../shared/company.model';
import { DataserviceService } from '../shared/dataservice.service'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
  providers: [DataserviceService],
})
export class IndividualComponent implements OnInit {
  myState: Object = {};
  private item: Object = {};
  private paymentReasons: Company[] = [];
  private companies: Company[] = [];
  private currencies: Company[] = [];
  constructor(private dataservice: DataserviceService) {}

  ngOnInit() {
    this.getCompany();
    this.getPaymentReason();
    this.getCurrency();
  }

  getPaymentReason() {
    this.dataservice
      .getPaymentReasons()
      .subscribe(data => this.paymentReasons = data);
  }

  getCurrency() {
    this.dataservice
      .getCurrencies()
      .subscribe(data => this.currencies = data);
  }

  getCompany() {
    this.dataservice
      .getCompanies()
      .do(x => console.log(x))
      .map(item => item.filter(id => id.id === 17))
      .map(item => item.sort((a, b) => a.id - b.id))
      .subscribe(data => {
        console.log(data);
        return (this.companies = data);
      });
  }
}
