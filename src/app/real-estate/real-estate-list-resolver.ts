import { ResolveFn } from '@angular/router';
import { RealEstateAd } from './types/real-estate-ad';
import { inject } from '@angular/core';
import { RealEstateAdService } from './real-estate-ad-service';
import { catchError, of } from 'rxjs';
import { SearchFilters } from './types/search-filters';

export const realEstateListResolver: ResolveFn<RealEstateAd[]> = (route, state) => {
  const adService = inject(RealEstateAdService);
  if (route.queryParamMap.keys.length > 0) {
    // const parseNumberParam = (key: string) => {
    //   return route.queryParamMap.has(key)? parseFloat(route.queryParamMap.get(key) as string) : undefined;
    // };
    // const filters: SearchFilters = {
    //   propertyTypes: route.queryParamMap.getAll('propertyTypes').map(parseInt),
    //   features: route.queryParamMap.getAll('features').map(parseInt),
    //   propertyStatuses: route.queryParamMap.getAll('propertyStatus').map(parseInt),
    //   location: route.queryParamMap.get('location') || undefined,
    //   imageIncluded: route.queryParamMap.has('imageIncluded'),
    //   priceIncluded: route.queryParamMap.has('priceIncluded'),
    //   isBroker: route.queryParamMap.has('isBroker'),
    //   isContractor: route.queryParamMap.has('isContractor'),
    //   entryDate: route.queryParamMap.get('entryDate') || undefined,
    //   freeSearchQuery: route.queryParamMap.get('freeSearchQuery') || undefined,
    //   minPrice: parseNumberParam('minPrice'),
    //   maxPrice: parseNumberParam('maxPrice'),
    //   minRooms: parseNumberParam('minRooms'),
    //   maxRooms: parseNumberParam('maxRooms'),
    //   minFloor: parseNumberParam('minFloor'),
    //   maxFloor: parseNumberParam('maxFloor'),

    // };

    return adService.searchAdsByQueryParams(route.queryParams).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }
  return adService.getAllAds().pipe(
    catchError(err => {
      console.error(err);
      return of([]);
    })
  );
};
