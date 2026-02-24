import { ResolveFn } from '@angular/router';
import { RealEstateAd } from './types/real-estate-ad';
import { inject } from '@angular/core';
import { RealEstateAdService } from './real-estate-ad-service';
import { catchError, of } from 'rxjs';

export const realEstateListResolver: ResolveFn<RealEstateAd[]> = (route, state) => {
  const adService = inject(RealEstateAdService);
  return adService.getAllAds().pipe(
    catchError(err => {
      console.error(err);
      return of([]);
    })
  );
};
