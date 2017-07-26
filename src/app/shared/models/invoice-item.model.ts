import { CommonList } from './common-list.model';

export class InvoiceItem {
    id: number;
    description: string;
<<<<<<< HEAD
    taxGroup: CommonList = new CommonList();
=======
    taxGroup: {
      id: number;
      name: string;
    }
>>>>>>> cd1819fe92cf64e04db730be7ff4dd629604548f
    taxAmount: number;
    amount: number;
}
