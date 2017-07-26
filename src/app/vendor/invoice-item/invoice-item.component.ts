import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { InvoiceItem } from '../../shared/models/invoice-item.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css'],
})
export class InvoiceItemComponent implements OnInit {

  @Input() item: InvoiceItem[] = [];
  @Output() onAddDistribution: EventEmitter<any> = new EventEmitter();

  constructor() { }

  addDistribution(e) {
    this.onAddDistribution.emit(e);
  }

  ngOnInit() {
    
  }

}
