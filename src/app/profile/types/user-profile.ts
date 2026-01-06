export interface UserProfile {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    dateOfBirth?: Date,
    city?: string,
    street?: string,
    houseNumber?: number,
    profileImageUrl?: string
}