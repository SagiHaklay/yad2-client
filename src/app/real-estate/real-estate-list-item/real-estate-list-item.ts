import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { RealEstateAd } from '../real-estate-ad';
import { environment } from '../../../environments/environment';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-real-estate-list-item',
  imports: [CurrencyPipe],
  templateUrl: './real-estate-list-item.html',
  styleUrl: './real-estate-list-item.scss',
})
export class RealEstateListItem {
  ad = input.required<RealEstateAd>();
  isLiked = signal(false);
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
    return details.join('\u2022');
  });
  

  toggleLike() {
    this.isLiked.update(value => !value);
  }
}
