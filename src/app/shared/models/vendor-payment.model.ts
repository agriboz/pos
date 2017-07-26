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
<<<<<<< HEAD
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
=======
    description: string;
    taxGroup: {
      id: number;
      name: string;
    };
    taxAmount: number;
    amount: number;
  };
}
>>>>>>> cd1819fe92cf64e04db730be7ff4dd629604548f
