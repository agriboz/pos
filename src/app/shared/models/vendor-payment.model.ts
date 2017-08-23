import {
  CommonList,
  StringCommonList,
  Supplier,
  InvoiceItem,
  ModuleDocument
} from './index';

export class VendorPayment {
  id: number;
  flowId: number;
  eInvoiceId: number;
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
  isManuel: boolean;
  isSent: boolean;
  currencyRate: number;
  supplier: Supplier = new Supplier();
  invoiceItems: InvoiceItem[] = [];
  documents: ModuleDocument[] = [];
  processDate: Date;
  isLastStep: boolean;
}
