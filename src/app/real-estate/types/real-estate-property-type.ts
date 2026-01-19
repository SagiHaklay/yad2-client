export enum RealEstatePropertyType {
    Apartment = 0x1,
    GardenApartment = 0x2,
    Private = 0x4,
    Penthouse = 0x8,
    Lot = 0x10,
    Duplex = 0x20,
    Tourism = 0x40,
    TwoFamilies = 0x80,
    Basement = 0x100,
    Triplex = 0x200,
    HousingUnit = 0x400,
    Farm = 0x800,
    AuxFarm = 0x1000,
    Protected = 0x2000,
    Exchange = 0x4000,
    Sublet = 0x8000,
    Building = 0x10000,
    Studio = 0x20000,
    Storage = 0x40000,
    Group = 0x80000,
    Parking = 0x100000,
    General = 0x200000
}
export function getStringType(type: RealEstatePropertyType) {
    switch (type) {
      case RealEstatePropertyType.Apartment: return 'דירה';
      case RealEstatePropertyType.GardenApartment: return 'דירת גן';
      case RealEstatePropertyType.Penthouse: return 'גג/ פנטהאוז';
      case RealEstatePropertyType.Duplex: return 'דופלקס';
      case RealEstatePropertyType.Tourism: return 'תיירות ונופש';
      case RealEstatePropertyType.Basement: return 'מרתף/ פרטר';
      case RealEstatePropertyType.Triplex: return 'טריפלקס';
      case RealEstatePropertyType.HousingUnit: return 'יחידת דיור';
      case RealEstatePropertyType.Exchange: return 'החלפת דירות';
      case RealEstatePropertyType.Sublet: return 'סאבלט';
      case RealEstatePropertyType.Studio: return 'סטודיו/ לופט';
      case RealEstatePropertyType.Private: return "בית פרטי/ קוטג'";
      case RealEstatePropertyType.TwoFamilies: return 'דו משפחתי';
      case RealEstatePropertyType.Farm: return 'משק חקלאי/ נחלה';
      case RealEstatePropertyType.AuxFarm: return 'משק עזר';
      case RealEstatePropertyType.Lot: return 'מגרשים';
      case RealEstatePropertyType.Protected: return 'דיור מוגן';
      case RealEstatePropertyType.Building: return 'בניין מגורים';
      case RealEstatePropertyType.Storage: return 'מחסן';
      case RealEstatePropertyType.Parking: return 'חניה';
      case RealEstatePropertyType.Group: return "קב' רכישה/ זכות לנכס";
      case RealEstatePropertyType.General: return 'כללי';
      default:
        return '';
    }
}