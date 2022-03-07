import { Unit, UnitGuid } from './unit.model'

export const getUnitList = async (): Promise<Unit[]> => {
  const result = await fetch(`https://view.wec360.com/api/demo/brf-traffen/units`)
  const units = await result.json()
  return units
}

/**
 * Fetch a single unit by its guid
 */
export const getUnit = async (guid: UnitGuid): Promise<Unit | undefined> => {
  // this is not how we do it in real life, but simply for demo purposes
  const units = await getUnitList()
  const unit = units.find((u) => u.guid === guid)

  return unit
}
