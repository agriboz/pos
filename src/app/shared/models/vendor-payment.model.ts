import { Supplier } from './supplier.model';
import { InvoiceItem } from './invoice-item.model';

export class VendorPayment {
    id: number;
    referenceNumber: number = 0;
    invoiceDate: Date = new Date;
    paymentDate: Date = new Date;
    invoiceNumber: string = '';
    description: string = '';
    currencyRate: number = 0;
    withHoldingAmount: number = 0;
    communicationTaxAmount: number = 0;
    totalAmount: number = 0;
    supplier: Supplier = new Supplier;
    invoiceItems: InvoiceItem[] = [];
}