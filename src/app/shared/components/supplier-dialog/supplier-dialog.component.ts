import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import { SupplierSearch, Supplier } from '../../models/index';

@Component({
  selector: 'app-supplier-dialog',
  templateUrl: './supplier-dialog.component.html',
  styleUrls: ['./supplier-dialog.component.css']
})
export class SupplierDialogComponent implements OnInit {

  public item: SupplierSearch = new SupplierSearch();
  public supplierList: Supplier[] = [];

  @Output() onSearchSupplier: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialogRef: MdDialogRef<SupplierDialogComponent>) { }

  ngOnInit() {
  }

  searchSupplier() {
    this.onSearchSupplier.emit(this.item);
  }
}
