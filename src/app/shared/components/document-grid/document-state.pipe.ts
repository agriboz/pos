import { Pipe, PipeTransform } from '@angular/core';
import { ModuleDocument, ModuleDocumentState } from '../../models/index';

@Pipe({ name: 'exclude' })
export class DocumentStatePipe implements PipeTransform {
    public transform(values) {
      if (!values || !values.length) {
        return [];
      }

      return values.filter(x => x.state !== ModuleDocumentState.Deleted);
    }
}
