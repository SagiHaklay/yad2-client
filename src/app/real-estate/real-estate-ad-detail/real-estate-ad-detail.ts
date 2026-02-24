import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RealEstateFullAd } from '../types/real-estate-full-ad';
import { environment } from '../../../environments/environment';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { getStringType } from '../types/real-estate-property-type';
import { LocationDetailsPipe } from '../location-details-pipe';
import { PropertyStatusPipe } from '../property-status-pipe';
import { PropertyFeature } from '../types/property-feature';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-real-estate-ad-detail',
  imports: [
    CurrencyPipe, 
    LocationDetailsPipe, 
    DatePipe,
    PropertyStatusPipe,
    Footer
  ],
  templateUrl: './real-estate-ad-detail.html',
  styleUrl: './real-estate-ad-detail.scss',
})
export class RealEstateAdDetail {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, {
    initialValue: { ad: {}}
  });
  ad = computed(() => this.data()['ad'] as RealEstateFullAd);
  mainImageUrl = computed(() => this.ad().imageUrl || environment.defaultImageUrl);
  imageUrls = computed(() => this.ad().imageUrls.length === 0? [environment.defaultImageUrl] : this.ad().imageUrls);
  // locationDetail = computed(() => {
  //   let details = [getStringType(this.ad().propertyType)];
  //   if (this.ad().neighborhood) {
  //     details.push(this.ad().neighborhood || '');
  //   }
  //   details.push(this.ad().city);
  //   return details.join(', ');
  // });
  isContactInfoVisible = signal(false);
  // entryDate = computed(() => {
  //   if (!this.ad().entryDate) return 'גמיש';
  //   const date = new Date(this.ad().entryDate as string);
  //   if (date.getDate() <= Date.now()) return 'כניסה מיידית';
  //   return date.toDateString();
  // });
  isImmediateEntry = computed(() => {
    const date = new Date(this.ad().entryDate as string);
    return date.getDate() <= Date.now();
  });

  showContactInfo() {
    this.isContactInfoVisible.set(true);
  }
  hideContactInfo() {
    this.isContactInfoVisible.set(false);
  }

  isFeatureIncluded(feature: PropertyFeature) {
    return this.ad().propertyFeatures.includes(feature);
  }
}
