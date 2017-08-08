import { Component, Input, OnInit } from '@angular/core';

import { Supplier, VendorRoute } from '../../models/index';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() item: Supplier = new Supplier();
  @Input() routeState: VendorRoute;

  constructor() { }

  ngOnInit() {
  }

  pickSupplier() {
    
  }
}
