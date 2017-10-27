import { Component, OnInit, EventEmitter } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import {
  DistributionDetail,
  CommonList
} from '../../shared/models';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  private item: DistributionDetail = new DistributionDetail();

  public costCenters: CommonList[] = [];
  public internalOrders: CommonList[] = [];
  public internalAccounts: CommonList[] = [];
  public externalAccounts: CommonList[] = [];
  public onCostCenterChanged: EventEmitter<any> = new EventEmitter();

  constructor(private dialogRef: MdDialogRef<DistributionComponent>) { }

  costCenterChanged(e) {
    this.onCostCenterChanged.emit(e);
  }

  ngOnInit() {
  }

}
