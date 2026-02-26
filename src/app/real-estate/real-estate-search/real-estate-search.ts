import { Component, inject } from '@angular/core';
import { RangeSlider } from "./range-slider/range-slider";
import { RoomCountSelect } from './room-count-select/room-count-select';
import { PropertyTypeFilter } from "./property-type-filter/property-type-filter";
import { AdditionalFilters } from './additional-filters/additional-filters';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RealEstateAdService } from '../real-estate-ad-service';
import { RealEstatePropertyType } from '../types/real-estate-property-type';
import { PropertyFeature } from '../types/property-feature';

@Component({
  selector: 'app-real-estate-search',
  imports: [
    RangeSlider, 
    RoomCountSelect, 
    PropertyTypeFilter, 
    AdditionalFilters,
    ReactiveFormsModule
  ],
  templateUrl: './real-estate-search.html',
  styleUrl: './real-estate-search.scss',
})
export class RealEstateSearch {
  private fb = inject(FormBuilder);
  private realEstateService = inject(RealEstateAdService);
  searchForm = this.fb.group({
    location: [''],
    propertyTypes: this.fb.control<RealEstatePropertyType[]>([]),
    priceRange: this.fb.group({
      min: [0],
      max: [20000]
    }),
    roomRange: this.fb.control<number[]>([]),
    withPrice: [false],
    withImage: [false],
    onlyMoshav: [false],
    priceDropped: [false],
    isBroker: [false],
    isContractor: [false],
    features: this.fb.control<PropertyFeature[]>([]),
    parkingIncluded: [false],
    balconyIncluded: [false],
    propertyStatus: this.fb.group({
      isNew: [false],
      isBrandNew: [false],
      isRenovated: [false],
      isPreserved: [false],
      isRenovationRequired: [false]
    }),
    floorRange: this.fb.group({
      min: [0],
      max: [21]
    }),
    areaRange: this.fb.group({
      min: [0],
      max: [500]
    }),
    builtAreaRange: this.fb.group({
      min: [0],
      max: [500]
    }),
    entryDate: [new Date()],
    isImmediate: [false],
    freeSearchQuery: ['']
  });
  get priceRange() {
    return this.searchForm.get('priceRange') as FormGroup;
  }
  selectRoomRange(roomRange: number[]) {
    this.searchForm.patchValue({
      roomRange
    });
  }
  selectTypeFilter(propertyTypes: RealEstatePropertyType[]) {
    this.searchForm.patchValue({
      propertyTypes
    });
  }
  submitSearch() {
    
  }
}
