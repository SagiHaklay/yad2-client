import { Pipe, PipeTransform } from '@angular/core';
import { RealEstatePropertyType, getStringType } from './types/real-estate-property-type';

@Pipe({
  name: 'propertyType',
})
export class PropertyTypePipe implements PipeTransform {

  transform(value: RealEstatePropertyType, ...args: unknown[]): string {
    return getStringType(value);
  }

}
