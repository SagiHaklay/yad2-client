import { Injectable, computed, effect, inject, signal, untracked } from '@angular/core';
import { AuthService } from '../../auth/auth-service';
import { Observable, of, tap } from 'rxjs';
import { RealEstateAd } from '../../real-estate/types/real-estate-ad';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private authService = inject(AuthService);
  private guestFavorites = signal(this.loadFromStorage());
  private userFavoriteCount = signal(0);
  favoriteCount = computed(() => {
    if (this.authService.currentUserId() !== null) {
      return this.userFavoriteCount();
    } else {
      return this.guestFavorites().length;
    }
  });
  constructor() {
    effect((onCleanup) => {
      if (this.authService.currentUserId() !== null) {
        const uploadSub = this.uploadFavorites(
          untracked(this.guestFavorites), 
          this.authService.currentUserId() as number
        ).subscribe({
          next: () => {
            // this.guestFavorites.set([]);
          },
          error: (err) => {
            console.error(err);
          }
        });
        onCleanup(() => {
          uploadSub.unsubscribe();
        });
      }
    });
    effect(() => {
      localStorage.setItem('guestFavorites', JSON.stringify(this.guestFavorites()));
    });
  }
  private loadFromStorage(): number[] {
    return JSON.parse(localStorage.getItem('guestFavorites') || '[]');
  }
  getFavorites(userId: number): Observable<RealEstateAd[]> {
    return of([
      {id: 1, street: 'מצפה', city: 'שוהם', houseNum: 26, price: 2000, imageUrls: [], propertyType: 'דירה', roomCount: 3, floor: 4, isFavorite: true},
      {id: 2, street: 'מצפה', city: 'שוהם', houseNum: 27, price: 2000, imageUrls: [], propertyType: 'דירה', roomCount: 3, floor: 4, isFavorite: true}
    ]).pipe(tap(favs => this.userFavoriteCount.set(favs.length)));
  }
  addToFavorites(adId: number, userId: number | null = null) {
    if (userId === null) {
      if (!this.guestFavorites().includes(adId)) {
        this.guestFavorites.update(arr => [...arr, adId]);
      }
      return of(adId);
    } else {
      return of(adId).pipe(tap(() => this.userFavoriteCount.update(value => value + 1)));
    }
  }
  removeFromFavorites(adId: number, userId: number | null = null) {
    if (userId === null) {
      const favorites = this.guestFavorites();
      const removeIndex = favorites.indexOf(adId);
      if (removeIndex !== -1) {
        favorites.splice(removeIndex, 1);
        this.guestFavorites.set(favorites.slice());
      }
      return of(adId);
    } else {
      return of(adId).pipe(tap(() => this.userFavoriteCount.update(value => value - 1)));
    }
  }
  uploadFavorites(favoriteIds: number[], userId: number): Observable<number[]> {
    return of(favoriteIds);
  }
}
