import {
  CommonList,
  StringCommonList,
  Supplier,
  InvoiceItem
} from './index';

export class VendorPayment {
  id: number;
  code: number;
  company: CommonList = new CommonList();
  currency: CommonList = new CommonList();
  stoppageAccount: StringCommonList = new StringCommonList();
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
