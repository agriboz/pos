import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import {
  ItemChangeState,
  IndividualPaymentDetail,
  IndividualPayment
} from '../../shared/models';

@Component({
  selector: 'app-individual-grid',
  templateUrl: './individual-grid.component.html',
  styleUrls: ['./individual-grid.component.css']
})
export class IndividualGridComponent implements OnInit {

  @Output() onDeleteDetail: EventEmitter<any> = new EventEmitter<any>();
  @Input() item: IndividualPayment = new IndividualPayment();

  constructor() { }

  ngOnInit() {
    if (!this.item.details) {
      this.item.details = [];
    }
  }

  deleteDetail(d, index) {
    if (d.state === ItemChangeState.Added) {
      this.item.details = [
        ...this.item.details.slice(0, index),
        ...this.item.details.slice(index + 1)
      ];
    } else {
      d.state = ItemChangeState.Deleted;
    }
  }
}
