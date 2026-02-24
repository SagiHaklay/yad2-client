import { Pipe, PipeTransform } from '@angular/core';
import { PropertyStatus } from './types/property-status';

@Pipe({
  name: 'propertyStatus',
})
export class PropertyStatusPipe implements PipeTransform {

  transform(value: PropertyStatus, ...args: unknown[]): string {
    switch (value) {
      case PropertyStatus.BrandNew: return 'חדש מקבלן (לא גרו בכלל)';
      case PropertyStatus.New: return 'חדש (נכס בן עד 10 שנים)';
      case PropertyStatus.Preserved: return 'משופץ (שופץ ב-5 שנים האחרונות)';
      case PropertyStatus.Renovated: return 'במצב שמור (במצב טוב, לא שופץ)';
      case PropertyStatus.RenovationRequired: return 'דרוש שיפוץ (זקוק לעבודת שיפוץ)';
      default: return 'invalid status';
    }
  }

}
