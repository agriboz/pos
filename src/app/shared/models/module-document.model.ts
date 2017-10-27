import {
    ItemChangeState
  } from './';

export class ModuleDocument {
    id: number;
    name: string;
    link: string;
    state: ItemChangeState;
    isEInvoice: boolean;
    file: File;
}
