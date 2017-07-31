import { Component, Input, OnInit } from '@angular/core';

import {
  DistributionDetail
} from '../../shared/models';

@Component({
  selector: 'app-distribution-grid',
  templateUrl: './distribution-grid.component.html',
  styleUrls: ['./distribution-grid.component.css']
})
export class DistributionGridComponent implements OnInit {

  @Input() distributionDetails: DistributionDetail[] = [];

  constructor() { }

  ngOnInit() {
    if (!this.distributionDetails) {
      this.distributionDetails = [];
    }
  }

}
