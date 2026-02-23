import { PropertyFeature } from "./property-feature";
import { PropertyStatus } from "./property-status";
import { PropertyView } from "./propery-view";
import { RealEstateAd } from "./real-estate-ad";

export interface RealEstateFullAd extends RealEstateAd {
    contactPhone: string,
    contactName?: string,
    totalFloors?: number,
    onColumns: boolean,
    airDirectionCount: number,
    parkingCount?: number,
    balconyCount: number,
    showerCount: number,
    propertyDescription?: string,
    isRent?: boolean,
    propertyFeatures: PropertyFeature[],
    propertyStatus: PropertyStatus,
    view: PropertyView,
    isBackProperty: boolean,
    builtArea?: number,
    monthlyPay?: number,
    houseCommiteePayment?: number,
    propertyTax?: number,
    paymentCount?: number
    entryDate?: string,
    gardenArea?: number,
    imageUrls: string[],
    videoUrls: string[]
}