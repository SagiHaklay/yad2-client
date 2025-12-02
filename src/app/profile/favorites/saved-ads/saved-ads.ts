import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealEstateAd } from '../../../real-estate/types/real-estate-ad';
import { RealEstateListItem } from "../../../real-estate/real-estate-list-item/real-estate-list-item";

@Component({
  selector: 'app-saved-ads',
  imports: [RealEstateListItem],
  templateUrl: './saved-ads.html',
  styleUrl: './saved-ads.scss',
})
export class SavedAds implements OnInit {
  private route = inject(ActivatedRoute);
  favorites = signal<RealEstateAd[]>([]);

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.favorites.set(data['favorites']);
    });
  }

  removeItemFromFavorites(index: number) {
    const favs = this.favorites();
    favs.splice(index, 1);
    this.favorites.set(favs.slice());
  }
}
