import { Unit, getImageFromRef, statusBorderClassMap, unitFactModel, UnitFactModelType } from 'data-access'
import Link from 'next/link'
import Image from 'next/image'
import { StatusBadge } from '../../components/general/status-badge'
import { UnitFact } from '../../components/general/unit-fact'

export interface ListItemProps {
  unit: Unit
}
export function ListItem({ unit }: ListItemProps) {
  return (
    <div className={`border border-borderGrey border-l-4 ${statusBorderClassMap[unit.status]} md:flex transition-all hover:drop-shadow-lg relative`} >
      {unit.primaryFloorplan ?
        <div className="overflow-hidden md:w-2/12 max-h-60 relative">
          <Image layout="fill" src={getImageFromRef(unit.primaryFloorplan, 'preview')} alt="Image Unit" className="w-full object-cover h-full" />
        </div>
        : null
      }

      <div className="content md:w-10/12 border-l border-l-borderGrey">
        <div className="flex justify-between items-center py-3 px-4 border-b border-b-borderGrey bg-white">
          <h2>
            <Link href={`/unit/${unit.guid}`}>
              <a className="text-xl font-bold unit-link">{unit.name}</a>
            </Link>
          </h2>
          <StatusBadge status={unit.status}></StatusBadge>
        </div>
        <div className="flex flex-wrap md:flex-row divide-x">
          <UnitFact heading="Price" model={new unitFactModel(UnitFactModelType.Currency, unit, unit.price)} textClass="text-lg" headingSize='h3' backgroundColor="bg-white" />
          <UnitFact heading="Monthly Fee" model={new unitFactModel(UnitFactModelType.Currency, unit, unit.monthlyFee)} textClass="text-lg" headingSize='h3' backgroundColor="bg-white" />
          <UnitFact heading="Rooms" model={new unitFactModel(UnitFactModelType.Integer, unit, unit.rooms)} textClass="text-lg" headingSize='h3' backgroundColor="bg-lightGrey" />
          <UnitFact heading="Area" model={new unitFactModel(UnitFactModelType.Area, unit, unit.livingArea)} textClass="text-lg" headingSize='h3' backgroundColor="bg-lightGrey" />
          <UnitFact heading="Floor" model={new unitFactModel(UnitFactModelType.Integer, unit, unit.floor)} textClass="text-lg" headingSize='h3' backgroundColor="bg-lightGrey" />
        </div>
      </div>
    </div>
  )
}
