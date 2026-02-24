import { PropertyFeature } from "./property-feature";
import { PropertyStatus } from "./property-status";
import { RealEstatePropertyType } from "./real-estate-property-type";

export interface SearchFilters {
    location?: string,
    propertyTypes: RealEstatePropertyType[],
    minPrice?: number,
    maxPrice?: number,
    minRooms?: number,
    maxRooms?: number,
    imageIncluded?: boolean,
    priceIncluded?: boolean,
    isBroker?: boolean,
    isContractor?: boolean,
    features: PropertyFeature[],
    propertyStatuses: PropertyStatus[],
    minFloor?: number,
    maxFloor?: number,
    minArea?: number,
    maxArea?: number,
    minBuiltArea?: number,
    maxBuiltArea?: number,
    entryDate?: string,
    freeSearchQuery?: string
}
