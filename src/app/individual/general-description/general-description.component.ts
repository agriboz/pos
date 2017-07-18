import { Component, OnInit, Input, Output } from '@angular/core';
import { Company } from '../../models/company'
import { DataserviceService } from '../../shared/dataservice.service'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-general-description',
  templateUrl: './general-description.component.html',
  styleUrls: ['./general-description.component.css'],
  providers: [DataserviceService]
})
export class GeneralDescriptionComponent implements OnInit {

  @Input() companies: Company
  @Input() currencies: Company
  @Input() paymentReasons: Company
  @Input() item


  // companies: Company[] = [];

  constructor(private dataserviceService: DataserviceService) { }

  ngOnInit() {
    // this.getCompany();
  }

  /* getCompany() {
    this.dataserviceService.getCompanies().then(company => this.companies = company);
  } */




}
