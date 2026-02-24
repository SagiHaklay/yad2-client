import { RealEstatePropertyType } from "./real-estate-property-type";

export interface RealEstateAd {
    id: number,
    street: string,
    houseNumber: number,
    city: string,
    price?: number,
    isFavorite?: boolean,
    imageUrl?: string,
    roomCount?: number,
    floor?: number,
    totalArea?: number,
    propertyType: RealEstatePropertyType,
    neighborhood?: string
}