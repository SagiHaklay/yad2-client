import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FavoriteService } from './favorite-service';
import { RealEstateAd } from '../../real-estate/types/real-estate-ad';
import { AuthService } from '../../auth/auth-service';

export const favoritesResolver: ResolveFn<RealEstateAd[]> = (route, state) => {
  const favoriteService = inject(FavoriteService);
  const authService = inject(AuthService);
  return favoriteService.getFavorites(authService.currentUserId() as number);
};
