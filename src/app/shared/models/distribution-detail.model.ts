import { CommonList } from './common-list.model';

export class DistributionDetail {
    id: number;
    account: CommonList = new CommonList();
    costCenter: CommonList = new CommonList();
    internalOrder: CommonList = new CommonList();
    quantity: number = 0;
    isInternal: boolean = true;
}