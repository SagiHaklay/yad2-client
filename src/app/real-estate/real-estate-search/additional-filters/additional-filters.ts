import { Component, input, model } from '@angular/core';
import { RangeSlider } from '../range-slider/range-slider';
import { PropertyFeature } from '../../types/property-feature';
import { FormGroup } from '@angular/forms';

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
  filterFormGroup = input.required<FormGroup>();
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
  get features() {
    return this.filterFormGroup().get('features');
  }
  get parkingIncluded() {
    return this.filterFormGroup().get('parkingIncluded');
  }
  get balconyIncluded() {
    return this.filterFormGroup().get('balconyIncluded');
  }
  get floorRange() {
    return this.filterFormGroup().get('floorRange') as FormGroup;
  }
  get areaRange() {
    return this.filterFormGroup().get('areaRange') as FormGroup;
  }
  get builtAreaRange() {
    return this.filterFormGroup().get('builtAreaRange') as FormGroup;
  }
  toggleFeature(feature: PropertyFeature) {
    const selectedFeatures = this.features?.value as PropertyFeature[];
    if (this.isFeatureIncluded(feature)) {
      this.features?.setValue(selectedFeatures.filter(f => f !== feature));
    } else {
      this.features?.setValue([...selectedFeatures, feature]);
    }
  }
  isFeatureIncluded(feature: PropertyFeature) {
    const selectedFeatures = this.features?.value;
    if (!selectedFeatures) return false;
    return (selectedFeatures as PropertyFeature[]).includes(feature);
  }
  toggleParking() {
    this.parkingIncluded?.setValue(!this.parkingIncluded.value);
  }
  toggleBalcony() {
    this.balconyIncluded?.setValue(!this.balconyIncluded.value);
  }
}
