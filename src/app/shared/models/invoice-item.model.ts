import { CommonList } from './common-list.model';

export class InvoiceItem {
    id: number;
    description: string;
    taxGroup: {
      id: number;
      name: string;
    }
    taxAmount: number;
    amount: number;
}
