import { getUnitList, Unit } from 'data-access'
import type { GetStaticProps, NextPage } from 'next'
import { ListItem } from '../components/unit-list/list-item';

interface Props {
  units: Unit[]
}

const ListPage: NextPage<Props> = ({ units }) => {
  return (
    <div className="container max-w-3xl">
      <h1 className="text-4xl font-heading">Unit List</h1>
      <div className="flex flex-col gap-1.5">
        {units.map((unit) => (
          <ListItem unit={unit} key={unit.id} />
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
