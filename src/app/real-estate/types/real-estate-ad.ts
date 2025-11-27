export interface RealEstateAd {
    id: number,
    street: string,
    houseNum: number,
    city: string,
    price?: number,
    isFavorite?: boolean,
    imageUrls: string[],
    roomCount?: number,
    floor?: number,
    area?: number,
    propertyType: string,
    neighborhood?: string
}