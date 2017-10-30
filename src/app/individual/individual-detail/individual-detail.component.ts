import { IndividualPaymentDetail } from './../../shared/models/individual-payment-detail.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-individual-detail',
  templateUrl: './individual-detail.component.html',
  styleUrls: ['./individual-detail.component.css']
})
export class IndividualDetailComponent implements OnInit {

  @Output() onDetailAdded: EventEmitter<any> = new EventEmitter<any>();
  private item: IndividualPaymentDetail = new IndividualPaymentDetail();

  constructor() { }

  ngOnInit() {
  }

  addDetailItem(i) {
    this.onDetailAdded.emit(i);
  }
}
