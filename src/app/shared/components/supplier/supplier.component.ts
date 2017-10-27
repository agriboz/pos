import { DialogService } from './../../services/dialog.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Supplier, ModuleRoute } from '../../models';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() item;
  @Input() routeState: ModuleRoute;
  @Output() onSearchSupplier: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialogservice: DialogService) { }

  ngOnInit() {
  }

  pickSupplier() {
    this.dialogservice
    .searchSupplier(this.item.company.id)
    .subscribe(data =>  {
      if (data) {
        this.item.supplier = data;
        this.onSearchSupplier.emit();
      }
    });
  }
}
