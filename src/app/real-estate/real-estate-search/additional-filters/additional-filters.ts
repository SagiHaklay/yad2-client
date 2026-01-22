import { Component } from '@angular/core';
import { RangeSlider } from '../range-slider/range-slider';
import { PropertyFeature } from '../../types/property-feature';

@Component({
  selector: 'app-additional-filters',
  imports: [RangeSlider],
  templateUrl: './additional-filters.html',
  styleUrl: './additional-filters.scss',
})
export class AdditionalFilters {
  readonly propertyFeatures = [
    PropertyFeature.Parking, PropertyFeature.Elevator, PropertyFeature.Shelter,
    PropertyFeature.Balcony, PropertyFeature.AirCondition, PropertyFeature.Storage,
    PropertyFeature.Renovated, PropertyFeature.Accessible, PropertyFeature.Bars,
    PropertyFeature.Furniture, PropertyFeature.Exclusive, PropertyFeature.PetsAllowed,
    PropertyFeature.Partners
  ];
  getFloorOptions() {
    let floorOptions = [
      'מרתף', 'קרקע'
    ];
    for (let i = 1; i < 20; i++) {
      floorOptions.push(`${i}`);
    }
    floorOptions.push('20+');
    return floorOptions;
  }
}
