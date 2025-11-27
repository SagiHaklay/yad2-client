import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RealEstateAd } from '../types/real-estate-ad';
import { RealEstateListItem } from '../real-estate-list-item/real-estate-list-item';

@Component({
  selector: 'app-real-estate-list',
  imports: [RealEstateListItem, RouterLink],
  templateUrl: './real-estate-list.html',
  styleUrl: './real-estate-list.scss',
})
export class RealEstateList {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, {
    initialValue: { ads: [] }
  });
  adList = computed(() => this.data()['ads'] as RealEstateAd[]);
}
