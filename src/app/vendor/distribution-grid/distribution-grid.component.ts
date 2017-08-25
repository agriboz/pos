import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
  DebugElement
} from '@angular/core';

import { DistributionDetail, ItemChangeState } from '../../shared/models';

@Component({
  selector: 'app-distribution-grid',
  templateUrl: './distribution-grid.component.html',
  styleUrls: ['./distribution-grid.component.css']
})
export class DistributionGridComponent implements OnInit, OnChanges {
  private sumQuantity: number;

  @Input() taxAmount: number;
  @Input() amount: number;
  @Input() distributionDetails: DistributionDetail[] = [];

  constructor() {}

  ngOnChanges() {
    if (!this.distributionDetails) {
      this.distributionDetails = [];
    }

    this.calculateAmount();
  }

  ngOnInit() {}

  calculateQuantity() {
    this.sumQuantity = this.distributionDetails.filter(x => x.state !== ItemChangeState.Deleted).reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);
  }

  calculateAmount() {
    this.calculateQuantity();

    this.distributionDetails.map((item, i) => {
      const taxAmount: number = isNaN(this.taxAmount) ? 0 : this.taxAmount;
      const amount: number = isNaN(this.amount) ? 0 : this.amount;

      item.taxAmount = taxAmount / this.sumQuantity * item.quantity;
      item.amount = amount / this.sumQuantity * item.quantity;
    });
  }

  deleteDistribution(d: DistributionDetail, index) {
    if (d.state === ItemChangeState.Added) {
      this.distributionDetails = [
        ...this.distributionDetails.slice(0, index),
        ...this.distributionDetails.slice(index + 1)
      ];
    } else {
      d.state = ItemChangeState.Deleted;
    }
  }
}
