import { 
    CommonList, 
    DistributionDetail 
} from './index';

export class InvoiceItem {
    id: number;
    description: string;
    taxGroup: CommonList = new CommonList();
    taxAmount: number;
    amount: number;
    totalAmount: number;
    isVisible: boolean = false;
    distributionDetails: DistributionDetail[] = [];
}
