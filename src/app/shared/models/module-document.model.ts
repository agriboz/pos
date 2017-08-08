import {
    ModuleDocumentState
  } from './index';

export class ModuleDocument {
    id: number;
    name: string;
    link: string;
    state: ModuleDocumentState;
    file: File;
}