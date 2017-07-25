export class VendorPayment {
  id: number;
  code: number;
  company: {
    id: number;
    name: string;
  };
  currency: {
    id: number;
    name: string;
  };
  department: {
    id: string;
    name: string;
  };
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
  supplier: {
    id: number;
    name: string;
    taxOffice: string;
    expiry: string;
    accountNumber: string;
    taxNumber: string;
  };
  invoiceItems: {
    id: number;
    description: string;
    taxGroup: {
      id: number;
      name: string;
    };
    taxAmount: number;
    amount: number;
  };
}
