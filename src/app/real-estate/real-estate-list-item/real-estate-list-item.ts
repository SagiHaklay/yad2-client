import { Component, computed, inject, input, linkedSignal, output, signal } from '@angular/core';
import { RealEstateAd } from '../types/real-estate-ad';
import { environment } from '../../../environments/environment';
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../../auth/auth-service';
import { FavoriteService } from '../../profile/favorites/favorite-service';

@Component({
  selector: 'app-real-estate-list-item',
  imports: [CurrencyPipe],
  providers: [],
  templateUrl: './real-estate-list-item.html',
  styleUrl: './real-estate-list-item.scss',
})
export class RealEstateListItem {
  private authService = inject(AuthService);
  private favoriteService = inject(FavoriteService);
  ad = input.required<RealEstateAd>();
  favoriteRemoved = output();
  isLiked = linkedSignal(() => !!this.ad().isFavorite);
  address = computed(() => `${this.ad().street} ${this.ad().houseNum}`);
  imageUrl = computed(() => this.ad().imageUrls.length === 0? environment.defaultImageUrl : this.ad().imageUrls[0]);
  locationDetail = computed(() => {
    let details = [this.ad().propertyType];
    if (this.ad().neighborhood) {
      details.push(this.ad().neighborhood || '');
    }
    details.push(this.ad().city);
    return details.join(', ');
  });
  propertyDetail = computed(() => {
    let details = [];
    if (this.ad().roomCount) {
      details.push(`${this.ad().roomCount} חדרים`);
    }
    if (this.ad().floor !== undefined) {
      const floor = this.ad().floor;
      details.push(floor === 0? 'קומת קרקע' : `קומה ${floor}`)
    }
    if (this.ad().area) {
      details.push(`${this.ad().area} מ"ר`);
    }
    return details.join(' \u2022 ');
  });
  

  toggleLike(event: any) {
    // event.preventDefault();
    console.log(this.ad().id);
    if (this.isLiked()) {
      this.favoriteService.removeFromFavorites(this.ad().id, this.authService.currentUserId()).subscribe({
        next: () => {
          this.favoriteRemoved.emit();
          this.isLiked.set(false);
        }
      });
    } else {
      this.favoriteService.addToFavorites(this.ad().id, this.authService.currentUserId()).subscribe({
        next: () => {
          this.isLiked.set(true);
        }
      });
    }
  }
}
