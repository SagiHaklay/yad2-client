import { RealEstateAd } from "../../real-estate/types/real-estate-ad";

export interface UserProfile {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    dateOfBirth?: Date,
    city?: string,
    street?: string,
    houseNumber?: number,
    profileImageUrl?: string,
    realEstateAds: RealEstateAd[],
    favoriteAds: RealEstateAd[]
}