import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RealEstateAd } from './types/real-estate-ad';
import { RealEstateFullAd } from './types/real-estate-full-ad';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchFilters } from './types/search-filters';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RealEstateAdService {
  private http = inject(HttpClient);
  private realEstateApiUrl = `${environment.restApiUrl}/RealEstateAd`;
  getAllAds(): Observable<RealEstateAd[]> {
    // return of([
    //   {id: 1, street: 'מצפה', city: 'שוהם', houseNum: 26, price: 2000, imageUrls: [], propertyType: 'דירה', roomCount: 3, floor: 4},
    //   {id: 2, street: 'מצפה', city: 'שוהם', houseNum: 26, price: 2000, imageUrls: [], propertyType: 'דירה', roomCount: 3, floor: 4}
    // ]);
    return this.http.get<RealEstateAd[]>(this.realEstateApiUrl);
  }
  getAdById(id: number): Observable<RealEstateFullAd> {
    // return of({
    //   id: 1, street: 'מצפה', city: 'שוהם', houseNum: 26, price: 2000, imageUrls: [], propertyType: 'דירה', roomCount: 3, floor: 4,
    //   contactPhone: '0544989884',
    //   contactName: 'Sagi',
    //   isRent: true,
    //   propertyStatus: 'במצב שמור',
    //   maxFloor: 6,
    //   description: 'תיאור נכס'
    // });
    return this.http.get<RealEstateFullAd>(`${this.realEstateApiUrl}/${id}`);
  }
  searchAds(filters: SearchFilters) {
    const params = new HttpParams().appendAll({
      ...filters
    });
    return this.http.get<RealEstateAd[]>(`${this.realEstateApiUrl}/search`, {
      params
    });
  }
  searchAdsByQueryParams(queryParams: Params) {
    return this.http.get<RealEstateAd[]>(`${this.realEstateApiUrl}/search`, {
      params: new HttpParams().appendAll(queryParams)
    });
  }
}
