import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { RealEstateFullAd } from './types/real-estate-full-ad';
import { inject } from '@angular/core';
import { RealEstateAdService } from './real-estate-ad-service';
import { of } from 'rxjs';

export const realEstateAdResolver: ResolveFn<RealEstateFullAd> = (route, state) => {
  const adService = inject(RealEstateAdService);
  const router = inject(Router);
  const adId = route.paramMap.get('id');
  if (adId === null) {
    console.log('No ID found');
    return of(new RedirectCommand(router.parseUrl('/error')));
  }
  const id = parseInt(adId);
  if (isNaN(id)) {
    console.log('Invalid ID');
    return of(new RedirectCommand(router.parseUrl('/error')));
  }
  return adService.getAdById(id);
};
