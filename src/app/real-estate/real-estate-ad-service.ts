import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RealEstateAd } from './real-estate-ad';

@Injectable({
  providedIn: 'root',
})
export class RealEstateAdService {
  getAllAds(): Observable<RealEstateAd[]> {
    return of([
      {id: 1, street: 'מצפה', city: 'שוהם', houseNum: 26, price: 2000, imageUrls: [], propertyType: 'דירה', roomCount: 3, floor: 4},
      {id: 2, street: 'מצפה', city: 'שוהם', houseNum: 26, price: 2000, imageUrls: [], propertyType: 'דירה', roomCount: 3, floor: 4}
    ]);
  }
}
