import { Component, Input, OnInit } from '@angular/core';
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
  displayedColumns = ['id', 'description', 'amount', 'taxGroup'];
  exampleDatabase = new ExampleDataBase()
  dataSource: ExampleDataSource | null;

  constructor() { }

  ngOnInit() {
    console.log(this.exampleDatabase.data)
    this.dataSource = new ExampleDataSource(this.exampleDatabase)
  }
}

export class ExampleDataBase {
  dataChange: BehaviorSubject<InvoiceItem[]> = new BehaviorSubject<InvoiceItem[]>([]);
  get data(): InvoiceItem[] {
    return [
      {
        id: 1,
        amount: 2,
        taxAmount: 5,
        description: 'sdfs',
        taxGroup: {
          id: 1,
          name: 'can'
        }
      },
      {
        id: 2,
        amount: 3,
        taxAmount: 5,
        description: 'sdfs',
        taxGroup: {
          id: 2,
          name: 'can'
        }
      }
    ]
  }
  constructor() {
    this.dataChange.next(this.data)
  }

}


export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDataBase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<InvoiceItem[]> {
    console.log(this._exampleDatabase.dataChange)

    return this._exampleDatabase.dataChange;
  }

  disconnect() { }
}
