import {
    ItemChangeState
  } from './index';

export class ModuleDocument {
    id: number;
    name: string;
    link: string;
    state: ItemChangeState;
    isEInvoice: boolean;
    file: File;
}
