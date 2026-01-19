import { Component } from '@angular/core';
import { RangeSlider } from "./range-slider/range-slider";
import { RoomCountSelect } from './room-count-select/room-count-select';
import { PropertyTypeFilter } from "./property-type-filter/property-type-filter";

@Component({
  selector: 'app-real-estate-search',
  imports: [RangeSlider, RoomCountSelect, PropertyTypeFilter],
  templateUrl: './real-estate-search.html',
  styleUrl: './real-estate-search.scss',
})
export class RealEstateSearch {

}
