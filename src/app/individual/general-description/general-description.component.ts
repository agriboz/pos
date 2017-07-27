import { Component, OnInit, Input, Output } from '@angular/core';
import { CommonList } from '../../shared/models/common-list.model'
import { DataService } from '../../shared/services/data.service'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-general-description',
  templateUrl: './general-description.component.html',
  styleUrls: ['./general-description.component.css'],
  providers: [DataService]
})
export class GeneralDescriptionComponent implements OnInit {

  @Input() companies: CommonList
  @Input() currencies: CommonList
  @Input() paymentReasons: CommonList
  @Input() item


  // companies: Company[] = [];

  constructor(private dataserviceService: DataService) { }

  ngOnInit() {
    // this.getCompany();
  }

  /* getCompany() {
    this.dataserviceService.getCompanies().then(company => this.companies = company);
  } */




}
