import { getUnit, Unit, getImageFromRef, unitFactModel, UnitFactModelType } from 'data-access'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { UnitFact } from '../../components/general/unit-fact'
import { StatusBadge } from '../../components/general/status-badge'

interface Props {
  unit: Unit
}

const UnitPage: NextPage<Props> = ({ unit }) => {
  return (
    <>
      {unit.primaryImage ?
        <div className="w-full max-h-[31.25rem] h-[60vh] relative overflow-hidden">
          <Image layout="fill" src={getImageFromRef(unit.primaryImage, '2k')} alt="Image Unit" className="w-full object-cover h-full" />
        </div>
        : null
      }

      <div className="container max-w-3xl my-6 text-center">
        <h1 className="text-3xl font-bold border-b-[3px] border-b-accent inline-block px-3 py-1">{unit.name}</h1>
        <div className="flex flex-wrap md:flex-row divide-x drop-shadow-lg my-6 rounded-lg overflow-hidden">
          <UnitFact heading="Price" model={new unitFactModel(UnitFactModelType.Currency, unit, unit.price)} textClass="text-2xl" headingSize='h2' backgroundColor="bg-white" />
          <UnitFact heading="Monthly Fee" model={new unitFactModel(UnitFactModelType.Currency, unit, unit.monthlyFee)} textClass="text-2xl" headingSize='h2' backgroundColor="bg-white" />
          <UnitFact heading="Rooms" model={new unitFactModel(UnitFactModelType.Integer, unit, unit.rooms)} textClass="text-lg" headingSize='h2' backgroundColor="bg-lightGrey" />
          <UnitFact heading="Area" model={new unitFactModel(UnitFactModelType.Area, unit, unit.livingArea)} textClass="text-lg" headingSize='h2' backgroundColor="bg-lightGrey" />
          <UnitFact heading="Floor" model={new unitFactModel(UnitFactModelType.Integer, unit, unit.floor)} textClass="text-lg" headingSize='h2' backgroundColor="bg-lightGrey" />
        </div>

        <StatusBadge status={unit.status}></StatusBadge>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const guid = context.params?.guid as string

  if (!guid) {
    return {
      notFound: true,
    }
  }

  const unit = await getUnit(guid)
  return {
    revalidate: 60 * 10,
    props: {
      unit,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default UnitPage
