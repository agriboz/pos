import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import { CommonList, InvoiceItem } from '../../shared/models';

@Component({
  selector: 'app-invoice-item-dialog',
  templateUrl: './invoice-item-dialog.component.html',
  styleUrls: ['./invoice-item-dialog.component.css']
})
export class InvoiceItemDialogComponent implements OnInit {

  public taxGroups: CommonList[] = [];
  private item: InvoiceItem = new InvoiceItem();

  constructor(private dialogRef: MdDialogRef<InvoiceItemDialogComponent>) { }

  ngOnInit() {
  }

}
