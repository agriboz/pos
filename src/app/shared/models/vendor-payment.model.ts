import { CommonList } from './common-list.model';
import { StringCommonList } from './string-common-list.model';
import { Supplier } from './supplier.model';
import { InvoiceItem } from './invoice-item.model';

export class VendorPayment {
  id: number;
  code: number;
  company: CommonList = new CommonList();
  currency: CommonList = new CommonList();
  department: StringCommonList = new StringCommonList();
  referenceNumber: number;
  invoiceDate: Date;
  paymentDate: Date;
  invoiceNumber: string;
  description: string;
  withHoldingAmount: number;
  communicationTaxAmount: number;
  totalAmount: number;
  isManeul: boolean;
  currencyRate: number;
  supplier: Supplier = new Supplier();
  invoiceItems: InvoiceItem[] = [];
}
