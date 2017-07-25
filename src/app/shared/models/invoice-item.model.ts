import { CommonList } from './common-list.model';

export class InvoiceItem {
    id: number;
    description: string;
    taxGroup: CommonList = new CommonList();
    taxAmount: number;
    amount: number;
}