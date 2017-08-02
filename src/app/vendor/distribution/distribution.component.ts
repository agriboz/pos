import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import {
  DistributionDetail,
  CommonList
} from '../../shared/models/index';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {
  @Input() item: DistributionDetail = new DistributionDetail();
  @Input() costCenters: CommonList[] = [];
  @Input() internalOrders: CommonList[] = [];
  @Input() internalAccounts: CommonList[] = [];
  @Input() externalAccounts: CommonList[] = [];
  @Output() onCostCenterChanged: EventEmitter<any> = new EventEmitter();

  constructor(private dialogRef: MdDialogRef<DistributionComponent>) { }

  costCenterChanged(e) {
    this.onCostCenterChanged.emit(e);
  }

  ngOnInit() {
  }

}
