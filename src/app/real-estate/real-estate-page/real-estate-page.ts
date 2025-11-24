import { Component } from '@angular/core';
import { RealEstateSearch } from '../real-estate-search/real-estate-search';
import { RealEstateList } from '../real-estate-list/real-estate-list';

@Component({
  selector: 'app-real-estate-page',
  imports: [RealEstateSearch, RealEstateList],
  templateUrl: './real-estate-page.html',
  styleUrl: './real-estate-page.scss',
})
export class RealEstatePage {

}
