import {
    ItemChangeState
} from './';

export class IndividualPaymentDetail {
    id: number;
    code: string;
    transferState: string;
    paymentDate: Date;
    amount: number;
    description: string;
    receiptDescription: string;
    state: ItemChangeState;
}
