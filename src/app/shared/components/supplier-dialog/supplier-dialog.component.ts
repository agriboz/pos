import { Component, Input, OnInit } from '@angular/core';
import { SupplierSearch } from '../../models/index';

@Component({
  selector: 'app-supplier-dialog',
  templateUrl: './supplier-dialog.component.html',
  styleUrls: ['./supplier-dialog.component.css']
})
export class SupplierDialogComponent implements OnInit {

  @Input() item: SupplierSearch = new SupplierSearch();

  constructor() { }

  ngOnInit() {
  }

}
