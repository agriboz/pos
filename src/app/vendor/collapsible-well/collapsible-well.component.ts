import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import {
  InvoiceItem,
  DistributionDetail,
  VendorRoute,
  ItemChangeState
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
  @Output() onAddInvoiceItem: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteInvoiceItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    this.invoiceItems.map((item, i) => {
      item.totalAmount = item.amount + item.taxAmount;
    });
  }

  ngOnInit() {
  }

  toggleContent(invoiceItem) {
    invoiceItem.isVisible = !invoiceItem.isVisible;
  }

  addDistribution(e) {
    this.onAddDistribution.emit(e);
  }

  addInvoiceItem() {
    this.onAddInvoiceItem.emit();
  }

  deleteInvoiceItem(i) {
    this.onDeleteInvoiceItem.emit(i);
  }
}
