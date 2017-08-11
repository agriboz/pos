import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import {
  DistributionDetail,
  ItemChangeState
} from '../../shared/models';

@Component({
  selector: 'app-distribution-grid',
  templateUrl: './distribution-grid.component.html',
  styleUrls: ['./distribution-grid.component.css']
})
export class DistributionGridComponent implements OnInit {

  private sumQuantity: number;

  @Input() taxAmount: number;
  @Input() amount: number;
  @Input() distributionDetails: DistributionDetail[] = [];

  constructor() { }

  ngOnChanges() {
    if (!this.distributionDetails) {
      this.distributionDetails = [];
    }

    this.calculateAmount();
  }

  ngOnInit() { }

  calculateQuantity() {
    this.sumQuantity = this.distributionDetails.reduce((acc, item) => {
      return acc += item.quantity;
    }, 0);
  }

  calculateAmount() {
    this.calculateQuantity();

    this.distributionDetails.map((item, i) => {
      item.taxAmount = this.taxAmount / this.sumQuantity * item.quantity;
      item.amount = this.amount / this.sumQuantity * item.quantity;
    });
  }

  deleteDistribution(d: DistributionDetail) {
    d.state = ItemChangeState.Deleted;
  }

}
