import { Component, Input, OnInit } from '@angular/core';
import { MdSort } from '@angular/material';

import { InvoiceItem } from '../../shared/models/invoice-item.model';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  @Input() item: InvoiceItem[] = [];

  constructor() { }

  ngOnInit() {
  }
  
}
