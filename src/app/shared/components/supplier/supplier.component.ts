import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Supplier, VendorRoute } from '../../models/index';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() item: Supplier = new Supplier();
  @Input() routeState: VendorRoute;
  @Output() onSearchSupplier: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  pickSupplier() {
    this.onSearchSupplier.emit();
  }
}
