import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RealEstateFullAd } from '../real-estate-full-ad';

@Component({
  selector: 'app-real-estate-ad-detail',
  imports: [],
  templateUrl: './real-estate-ad-detail.html',
  styleUrl: './real-estate-ad-detail.scss',
})
export class RealEstateAdDetail {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, {
    initialValue: { ad: {}}
  });
  ad = computed(() => this.data()['ad'] as RealEstateFullAd);
}
