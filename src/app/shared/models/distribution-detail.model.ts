import {
    CommonList,
    ItemChangeState
} from './';

export class DistributionDetail {
    id: number;
    account: CommonList = new CommonList();
    costCenter: CommonList = new CommonList();
    internalOrder: CommonList = new CommonList();
    quantity: number = 0;
    taxAmount: number = 0;
    amount: number = 0;
    state: ItemChangeState;
    isInternal: boolean = true;
}