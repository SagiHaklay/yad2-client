import { Component, computed, inject, Signal } from '@angular/core';
import { RangeSlider } from "./range-slider/range-slider";
import { RoomCountSelect } from './room-count-select/room-count-select';
import { PropertyTypeFilter } from "./property-type-filter/property-type-filter";
import { AdditionalFilters } from './additional-filters/additional-filters';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RealEstateAdService } from '../real-estate-ad-service';
import { RealEstatePropertyType } from '../types/real-estate-property-type';
import { PropertyFeature } from '../types/property-feature';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchFilters } from '../types/search-filters';
import { toSignal } from '@angular/core/rxjs-interop';
import { PropertyStatus } from '../types/property-status';

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
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  queryParamMap = toSignal(this.route.queryParamMap, {initialValue: this.route.snapshot.paramMap});
  filters: Signal<SearchFilters> = computed(() => {
    
    return {
      propertyTypes: this.queryParamMap().getAll('propertyTypes').map(parseInt),
      features: this.queryParamMap().getAll('features').map(parseInt),
      propertyStatuses: this.queryParamMap().getAll('propertyStatus').map(parseInt),
      location: this.queryParamMap().get('location') || undefined,
      imageIncluded: this.queryParamMap().has('imageIncluded'),
      priceIncluded: this.queryParamMap().has('priceIncluded'),
      isBroker: this.queryParamMap().has('isBroker'),
      isContractor: this.queryParamMap().has('isContractor'),
      entryDate: this.queryParamMap().get('entryDate') || undefined,
      freeSearchQuery: this.queryParamMap().get('freeSearchQuery') || undefined,
      minPrice: this.parseNumberParam('minPrice'),
      maxPrice: this.parseNumberParam('maxPrice'),
      minRooms: this.parseNumberParam('minRooms'),
      maxRooms: this.parseNumberParam('maxRooms'),
      minFloor: this.parseNumberParam('minFloor'),
      maxFloor: this.parseNumberParam('maxFloor'),
      minArea: this.parseNumberParam('minArea'),
      maxArea: this.parseNumberParam('maxArea'),
      minBuiltArea: this.parseNumberParam('minBuiltArea'),
      maxBuiltArea: this.parseNumberParam('maxBuiltArea'),
      parkingIncluded: this.queryParamMap().has('parkingIncluded'),
      balconyIncluded: this.queryParamMap().has('balconyIncluded')
    };
  }); 
  searchForm = this.fb.group({
    location: this.fb.control(this.filters().location || ''),
    propertyTypes: this.fb.control<RealEstatePropertyType[]>(this.filters().propertyTypes),
    priceRange: this.fb.group({
      min: this.fb.control(this.filters().minPrice || 0),
      max: this.fb.control(this.filters().maxPrice || 20000)
    }),
    roomRange: this.fb.group({
      min: this.fb.control(this.filters().minRooms || null),
      max: this.fb.control(this.filters().maxRooms || null)
    }),
    withPrice: this.fb.control(this.filters().priceIncluded || false),
    withImage: this.fb.control(this.filters().imageIncluded || false),
    onlyMoshav: this.fb.control(false),
    priceDropped: this.fb.control(false),
    isBroker: this.fb.control(this.filters().isBroker || false),
    isContractor: this.fb.control(this.filters().isContractor || false),
    features: this.fb.control<PropertyFeature[]>(this.filters().features),
    parkingIncluded: this.fb.control(this.filters().parkingIncluded || false),
    balconyIncluded: this.fb.control(this.filters().balconyIncluded || false),
    propertyStatus: this.fb.group({
      isNew: this.fb.control(this.filters().propertyStatuses.includes(PropertyStatus.New)),
      isBrandNew: this.fb.control(this.filters().propertyStatuses.includes(PropertyStatus.BrandNew)),
      isRenovated: this.fb.control(this.filters().propertyStatuses.includes(PropertyStatus.Renovated)),
      isPreserved: this.fb.control(this.filters().propertyStatuses.includes(PropertyStatus.Preserved)),
      isRenovationRequired: this.fb.control(this.filters().propertyStatuses.includes(PropertyStatus.RenovationRequired))
    }),
    floorRange: this.fb.group({
      min: this.fb.control(this.filters().maxFloor || 0),
      max: this.fb.control(this.filters().maxFloor || 21)
    }),
    areaRange: this.fb.group({
      min: this.fb.control(this.filters().minArea || 0),
      max: this.fb.control(this.filters().maxArea || 500)
    }),
    builtAreaRange: this.fb.group({
      min: this.fb.control(this.filters().minBuiltArea || 0),
      max: this.fb.control(this.filters().maxBuiltArea || 500)
    }),
    entryDate: this.fb.control(this.filters().entryDate? Date.parse(this.filters().entryDate as string) : new Date()),
    isImmediate: this.fb.control(false),
    freeSearchQuery: this.fb.control(this.filters().freeSearchQuery || '')
  });
  get priceRange() {
    return this.searchForm.get('priceRange') as FormGroup;
  }
  private parseNumberParam = (key: string) => {
      return this.queryParamMap().has(key)? parseFloat(this.queryParamMap().get(key) as string) : undefined;
  };
  selectRoomRange(range: number[]) {
    let min: number | null = null;
    let max: number | null = null;
    if (range.length >= 1) {
      min = range[0];
      if (range.length >= 2) {
        max = range[1];
      }
    }
    this.searchForm.patchValue({
      roomRange: {min, max}
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
