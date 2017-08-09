import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import {
  InvoiceItem,
  DistributionDetail,
  VendorRoute
} from '../../shared/models';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {

  @Input() invoiceItems: InvoiceItem[] = [];
  @Input() routeState: VendorRoute;
  @Output() onAddDistribution: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleContent(invoiceItem) {
    invoiceItem.isVisible = !invoiceItem.isVisible;
  }

  addDistribution(e) {
    this.onAddDistribution.emit(e);
  }

  addInvoiceItem() { 

  }
  pickSupplier() {
    
  }
}
