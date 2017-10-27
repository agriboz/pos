import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  OnChanges,
} from '@angular/core';

import {
  InvoiceItem,
  DistributionDetail,
  ModuleRoute,
  ItemChangeState
} from '../../shared/models';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit, OnChanges {

  @Input() invoiceItems: InvoiceItem[] = [];
  @Input() routeState: ModuleRoute;
  @Output() onAddDistribution: EventEmitter<any> = new EventEmitter();
  @Output() onAddInvoiceItem: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteInvoiceItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    this.invoiceItems.map((item, i) => {
      const amount: number = isNaN(item.amount) ? 0 : item.amount;
      const taxAmount: number = isNaN(item.taxAmount) ? 0 : item.taxAmount;
      item.totalAmount = parseFloat(amount.toString()) + parseFloat(taxAmount.toString());
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

  deleteInvoiceItem(item, index) {
    this.onDeleteInvoiceItem.emit({item, index});
  }
}
