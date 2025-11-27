import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RealEstateFullAd } from '../types/real-estate-full-ad';
import { environment } from '../../../environments/environment';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-real-estate-ad-detail',
  imports: [CurrencyPipe],
  templateUrl: './real-estate-ad-detail.html',
  styleUrl: './real-estate-ad-detail.scss',
})
export class RealEstateAdDetail {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, {
    initialValue: { ad: {}}
  });
  ad = computed(() => this.data()['ad'] as RealEstateFullAd);
  imageUrls = computed(() => this.ad().imageUrls.length === 0? [environment.defaultImageUrl] : this.ad().imageUrls);
  locationDetail = computed(() => {
    let details = [this.ad().propertyType];
    if (this.ad().neighborhood) {
      details.push(this.ad().neighborhood || '');
    }
    details.push(this.ad().city);
    return details.join(', ');
  });
}
