import { Supplier } from './supplier.model';
import { InvoiceItem } from './invoice-item.model';

export class VendorPayment {
    id: number;
    referenceNumber: number;
    invoiceDate: Date;
    paymentDate: Date;
    invoiceNumber: string;
    description: string;
    currencyRate: number;
    withHoldingAmount: number;
    communicationTaxAmount: number;
    totalAmount: number;
    supplier: Supplier = new Supplier();
    invoiceItems: InvoiceItem[] = [];
}