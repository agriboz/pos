import {
    CommonList,
    Supplier,
    IndividualPaymentDetail
} from './'

export class IndividualPayment {
    id: number;
    flowId: number;
    referenceNumber: number;
    company: CommonList = new CommonList();
    currency: CommonList = new CommonList();
    paymentReason: CommonList = new CommonList();
    supplier: Supplier = new Supplier();
    supplierAccount: CommonList = new CommonList();
    documentDate: Date;
    description: string;
    currencyRate: number;
    details: IndividualPaymentDetail[] = [];
    totalAmount: number;
}
