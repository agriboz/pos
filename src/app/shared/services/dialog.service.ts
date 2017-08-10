import { DataService } from './data.service';
import { CommonList } from '../models/common-list.model';
import { DistributionComponent } from '../../vendor/distribution/distribution.component';
import { DistributionDetail } from '../models/distribution-detail.model';
import { MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SupplierDialogComponent } from '../components/supplier-dialog/supplier-dialog.component';
import { InvoiceItemDialogComponent } from '../../vendor/invoice-item-dialog/invoice-item-dialog.component';

@Injectable()
export class DialogService {
    constructor(private dataservice: DataService
        , private dialog: MdDialog) { }

    addDistribution(companyId: number, invoiceItemId: number): Observable<any> {
        let internalOrders: CommonList[];

        let dialogRef = this.dialog.open(DistributionComponent);

        this.dataservice
            .getAccounts(companyId, true)
            .subscribe(data => dialogRef.componentInstance.internalAccounts = data);

        this.dataservice
            .getAccounts(companyId, false)
            .subscribe(data => dialogRef.componentInstance.externalAccounts = data);

        this.dataservice
            .getCostCenters(companyId)
            .subscribe(data => dialogRef.componentInstance.costCenters = data);

        dialogRef.componentInstance
            .onCostCenterChanged
            .flatMap(data => this.dataservice.getInternalOrders(data.value.id).map(x => dialogRef.componentInstance.internalOrders = x))
            .subscribe();

        return dialogRef.afterClosed();
    }
    searchSupplier(companyId: number): Observable<any> {
        let dialogRef = this.dialog.open(SupplierDialogComponent);

        dialogRef.componentInstance
            .onSearchSupplier
            .flatMap(data => { 
                data.companyId = companyId;
                return this.dataservice.getSupplierList(data);
            })
            .subscribe(data => dialogRef.componentInstance.supplierList = data);

        return dialogRef.afterClosed();
    }
    addInvoiceItem(companyId: number) {
        let dialogRef = this.dialog.open(InvoiceItemDialogComponent);

        this.dataservice
            .getTaxGroups(companyId)
            .subscribe(data => dialogRef.componentInstance.taxGroups = data);        

        return dialogRef.afterClosed();
    }
}