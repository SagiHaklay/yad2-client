import { Pipe, PipeTransform } from '@angular/core';
import { RealEstateAd } from './types/real-estate-ad';
import { getStringType } from './types/real-estate-property-type';

@Pipe({
  name: 'locationDetails',
})
export class LocationDetailsPipe implements PipeTransform {

  transform(value: RealEstateAd, ...args: unknown[]): unknown {
    let details = [getStringType(value.propertyType)];
    if (value.neighborhood) {
      details.push(value.neighborhood || '');
    }
    details.push(value.city);
    return details.join(', ');
  }

}
