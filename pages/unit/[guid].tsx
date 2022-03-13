import { getUnit, Unit } from 'data-access'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
  unit: Unit
}

const UnitPage: NextPage<Props> = ({ unit }) => {
  return (
    <div className="container">
      <h1 className="text-3xl">{unit.name}</h1>
      <p>
        {unit.price}
      </p>
    </div>
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
