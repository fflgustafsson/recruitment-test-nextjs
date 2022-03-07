import { getUnitList, Unit } from 'data-access'
import Link from 'next/link'
import type { GetStaticProps, NextPage } from 'next'

interface Props {
  units: Unit[]
}

const ListPage: NextPage<Props> = ({ units }) => {
  return (
    <div className="container">
      <h1 className="text-4xl font-heading">Unit List</h1>

      <div className="flex flex-col gap-1">
        {units.map((unit) => (
          <Link key={unit.id} href={`/unit/${unit.guid}`}>
            <a className="bg-gray-300 p-4 rounded-sm">{unit.name}</a>
          </Link>
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
