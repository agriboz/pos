import { DataService } from './data.service';
import { CommonList } from '../models/common-list.model';
import { DistributionComponent } from '../../vendor/distribution/distribution.component';
import { DistributionDetail } from '../models/distribution-detail.model';
import { MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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
}