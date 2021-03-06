import {
    CommonList,
    DistributionDetail,
    ItemChangeState
} from './';

export class InvoiceItem {
    id: number;
    description: string;
    taxGroup: CommonList = new CommonList();
    taxAmount: number;
    amount: number;
    totalAmount: number;
    state: ItemChangeState;
    isVisible: boolean = false;
    distributionDetails: DistributionDetail[] = [];
}
