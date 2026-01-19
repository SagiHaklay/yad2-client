import { Component, computed, signal } from '@angular/core';
import { RealEstatePropertyType } from '../../types/real-estate-property-type';
import { PropertyTypePipe } from '../../property-type-pipe';

@Component({
  selector: 'app-property-type-filter',
  imports: [PropertyTypePipe],
  templateUrl: './property-type-filter.html',
  styleUrl: './property-type-filter.scss',
})
export class PropertyTypeFilter {
  readonly apartmentTypes = [
    RealEstatePropertyType.Apartment, 
    RealEstatePropertyType.GardenApartment,
    RealEstatePropertyType.Penthouse,
    RealEstatePropertyType.Duplex,
    RealEstatePropertyType.Tourism,
    RealEstatePropertyType.Basement,
    RealEstatePropertyType.Triplex,
    RealEstatePropertyType.HousingUnit,
    RealEstatePropertyType.Exchange,
    RealEstatePropertyType.Sublet,
    RealEstatePropertyType.Studio
  ];
  readonly houseTypes = [
    RealEstatePropertyType.Private,
    RealEstatePropertyType.TwoFamilies,
    RealEstatePropertyType.Farm,
    RealEstatePropertyType.AuxFarm
  ];
  readonly otherTypes = [
    RealEstatePropertyType.Lot,
    RealEstatePropertyType.Protected,
    RealEstatePropertyType.Building,
    RealEstatePropertyType.Storage,
    RealEstatePropertyType.Parking,
    RealEstatePropertyType.Group,
    RealEstatePropertyType.General
  ];
  apartmentsFilter = signal<Set<RealEstatePropertyType>>(new Set());
  housesFilter = signal<Set<RealEstatePropertyType>>(new Set());
  othersFilter = signal<Set<RealEstatePropertyType>>(new Set());
  isAllApartments = computed(() => this.apartmentsFilter().size === this.apartmentTypes.length);
  isAllHouses = computed(() => this.housesFilter().size === this.houseTypes.length);
  private toggleType(type: RealEstatePropertyType, filterSet: Set<RealEstatePropertyType>) {
    if (filterSet.has(type)) {
      filterSet.delete(type);
    } else {
      filterSet.add(type);
    }
    return filterSet;
  }
  toggleApartmentType(type: RealEstatePropertyType) {
    this.apartmentsFilter.update(filterSet => this.toggleType(type, filterSet));
  }
  toggleHouseType(type: RealEstatePropertyType) {
    this.housesFilter.update(filterSet => this.toggleType(type, filterSet));
  }
  toggleOtherType(type: RealEstatePropertyType) {
    this.othersFilter.update(filterSet => this.toggleType(type, filterSet));
  }
  toggleAllApartments() {
    if (this.isAllApartments()) {
      this.apartmentsFilter.set(new Set());
    } else {
      this.apartmentsFilter.set(new Set(this.apartmentTypes));
    }
  }
  toggleAllHouses() {
    if (this.isAllHouses()) {
      this.housesFilter.set(new Set());
    } else {
      this.housesFilter.set(new Set(this.houseTypes));
    }
  }
}
