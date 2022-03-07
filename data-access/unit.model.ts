export declare type UnitId = string
export declare type UnitGuid = string
export declare type Currency = 'EUR' | 'USD' | 'SEK' | 'NOK' | 'DKK'

export const enum UnitStatus {
  Showroom = 'showroom',
  ComingSoon = 'coming_soon',
  ForSale = 'for_sale',
  Reserved = 'reserved',
  Booked = 'booked',
  Sold = 'sold',
  NotForSale = 'not_for_sale',
  Hidden = 'hidden',
  Removed = 'removed',
}

export const statusBgClassMap = {
  [UnitStatus.Showroom]: 'bg-status-showroom',
  [UnitStatus.ComingSoon]: 'bg-status-coming_soon',
  [UnitStatus.ForSale]: 'bg-status-for_sale',
  [UnitStatus.Reserved]: 'bg-status-reserved',
  [UnitStatus.Booked]: 'bg-status-booked',
  [UnitStatus.Sold]: 'bg-status-sold',
  [UnitStatus.NotForSale]: 'bg-status-not_for_sale',
  [UnitStatus.Hidden]: 'bg-status-hidden',
  [UnitStatus.Removed]: 'bg-status-removed',
}

export const statusNameMap = {
  [UnitStatus.Showroom]: 'Showroom',
  [UnitStatus.ComingSoon]: 'ComingSoon',
  [UnitStatus.ForSale]: 'For Sale',
  [UnitStatus.Reserved]: 'Reserved',
  [UnitStatus.Booked]: 'Booked',
  [UnitStatus.Sold]: 'Sold',
  [UnitStatus.NotForSale]: 'Not For Sale',
  [UnitStatus.Hidden]: 'Hidden',
  [UnitStatus.Removed]: 'Removed',
}

export const enum MonthlyFeeUnit {
  Month = 'month',
  M2 = 'm2',
  Ft2 = 'ft2',
}

export const enum AreaUnit {
  M2 = 'm2',
  Ft2 = 'ft2',
}

export interface ImageRef {
  ref: string
  width: number
  height: number
}

export interface Unit {
  id?: UnitId // The mongoDB ObjectID converted into a string (not for public urls or front facing, but available in api)
  guid: UnitGuid // The organizations unique id of the unit, must be unique within the project, often used in urls as ID
  orgId: string
  projectId: string

  // General
  name: string // The describing name of the property
  status: UnitStatus // preview, for_sale, reserved, booked, sold, not_for_sale, hidden	The status / state of the unit
  unitNumber?: string // The apartment number

  // Financial
  currency?: Currency // Currency code ISO 4217 ex `SEK`
  price?: number // The list price of the unit
  monthlyFee?: number // the monthly fee of the unit
  monthlyFeeUnit?: MonthlyFeeUnit // The unit of monthly fee, ex. 'month', 'm2'

  // Unit information
  livingArea?: number // The full area of the unit
  livingAreaUnits?: AreaUnit // the unit, most often m² or ft²
  floor?: number // The floor on which the unit resides
  rooms?: number // The number of rooms (may deviate between regions)

  // Images
  primaryFloorplan?: ImageRef // a reference to the primary floorplan image, needs to use util to convert to our cdn url format
  primaryImage?: ImageRef // needs to use util to convert to our cdn url format
}
