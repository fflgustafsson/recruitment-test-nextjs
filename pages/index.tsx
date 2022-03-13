import { getUnitList, Unit, getImageFromRef, statusBorderClassMap, unitFactModel, UnitFactModelType } from 'data-access'
import Link from 'next/link'
import type { GetStaticProps, NextPage } from 'next'
import { StatusBadge } from '../components/general/status-badge'
import { Favorite } from '../components/general/favorite'
import { UnitFact } from '../components/general/unit-fact'

interface Props {
  units: Unit[]
}

const ListPage: NextPage<Props> = ({ units }) => {
  return (
    <div className="container max-w-3xl">
      <h1 className="text-4xl font-heading">Unit List</h1>

      <div className="flex flex-col gap-1">
        {units.map((unit) => (
          <div className={`border border-borderGrey border-l-4 ${statusBorderClassMap[unit.status]} flex`} key={unit.id} >
            { unit.primaryFloorplan ?
              <div className="overflow-hidden">
                <img src={getImageFromRef(unit.primaryFloorplan, 'preview')} alt="Image Unit" width={120} height={120} className="transition-all hover:scale-125"/>
              </div>
              : null
            }

            <div className="content w-10/12 border-l border-l-borderGrey">
              <div className="flex justify-between items-center py-3 px-4 border-b border-b-borderGrey">
                <h2>
                <Link href={`/unit/${unit.guid}`}>
                  <a className="text-xl font-bold">{unit.name}</a>
                </Link>
                </h2>
                
                <div className="flex items-center">
                  <StatusBadge status={unit.status}></StatusBadge>
                  <Favorite/>
                </div>
                
              </div>
              <div className="flex md:flex-row divide-x">
                <UnitFact heading="Price" model={new unitFactModel(UnitFactModelType.Currency, unit, unit.price )} textClass="text-lg" headingSize='h3' backgroundColor="bg-white"/>
                <UnitFact heading="Monthly Fee"  model={new unitFactModel(UnitFactModelType.Currency, unit, unit.monthlyFee )} textClass="text-lg" headingSize='h3' backgroundColor="bg-white"/>
                <UnitFact heading="Rooms" model={new unitFactModel(UnitFactModelType.Integer, unit, unit.rooms )}  textClass="text-lg"  headingSize='h3'backgroundColor="bg-lightGrey"/>
                <UnitFact heading="Area" model={new unitFactModel(UnitFactModelType.Area, unit, unit.livingArea )} textClass="text-lg"  headingSize='h3' backgroundColor="bg-lightGrey"/>
                <UnitFact heading="Floor" model={new unitFactModel(UnitFactModelType.Integer, unit, unit.floor )} textClass="text-lg"  headingSize='h3' backgroundColor="bg-lightGrey"/>
              </div>

            </div>

          </div>

        ))}
      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  // fetches units from api and passes to ListPage as Prop
  const units = await getUnitList()

  return {
    props: {
      units,
    },
  }
}

export default ListPage
