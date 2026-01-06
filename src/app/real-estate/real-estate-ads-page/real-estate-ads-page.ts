import { Component } from '@angular/core';
import { RealEstateSearch } from "../real-estate-search/real-estate-search";
import { RealEstateList } from "../real-estate-list/real-estate-list";
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-real-estate-ads-page',
  imports: [RealEstateSearch, RealEstateList, Footer],
  templateUrl: './real-estate-ads-page.html',
  styleUrl: './real-estate-ads-page.scss',
})
export class RealEstateAdsPage {

}
