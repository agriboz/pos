import { Component, Input, OnInit } from '@angular/core';

import { Supplier } from '../../models/supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() item: Supplier = new Supplier();

  constructor() { }

  ngOnInit() {
  }

}
