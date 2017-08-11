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
    isVisible: boolean = false;
    distributionDetails: DistributionDetail[] = [];
}
