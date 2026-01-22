import { Component } from '@angular/core';
import { RangeSlider } from "./range-slider/range-slider";
import { RoomCountSelect } from './room-count-select/room-count-select';
import { PropertyTypeFilter } from "./property-type-filter/property-type-filter";
import { AdditionalFilters } from './additional-filters/additional-filters';

@Component({
  selector: 'app-real-estate-search',
  imports: [RangeSlider, RoomCountSelect, PropertyTypeFilter, AdditionalFilters],
  templateUrl: './real-estate-search.html',
  styleUrl: './real-estate-search.scss',
})
export class RealEstateSearch {

}
