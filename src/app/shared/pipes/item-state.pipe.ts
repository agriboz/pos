import { Pipe, PipeTransform } from '@angular/core';
import { ItemChangeState } from '../models/index';

@Pipe({ name: 'exclude' })
export class ItemStatePipe implements PipeTransform {
    public transform(values) {
      if (!values || !values.length) {
        return [];
      }

      return values.filter(x => x.state !== ItemChangeState.Deleted);
    }
}
