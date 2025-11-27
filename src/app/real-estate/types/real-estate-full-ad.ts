import { RealEstateAd } from "./real-estate-ad";

export interface RealEstateFullAd extends RealEstateAd {
    contactPhone: string,
    contactName?: string,
    maxFloor?: number,
    parkingCount?: number
}