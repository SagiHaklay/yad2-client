import { RealEstateAd } from "./real-estate-ad";

export interface RealEstateFullAd extends RealEstateAd {
    contactPhone: string,
    contactName?: string,
    maxFloor?: number,
    parkingCount?: number,
    description?: string,
    isRent: boolean,
    propertyStatus: string,
    builtArea?: number,
    monthlyPay?: number,
    vaad?: number,
    arnonaPer2Months?: number,
    paymentCount?: number
    entryDate?: Date
}