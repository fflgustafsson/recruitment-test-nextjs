/* eslint-disable @next/next/no-img-element */
import { StatusBadge } from 'components/status-badge'
import { AreaUnit, getImageFromRef, Unit, UnitStatus } from 'data-access'
import type { NextPage } from 'next'

const FAKE_UNIT: Unit = {
  id: '5f4667f14900ad0018a1d051',
  guid: '1001',
  orgId: 'demo',
  projectId: 'brf-traffen',
  name: '1001',
  status: UnitStatus.ForSale,
  currency: 'USD',
  rooms: 2,
  livingArea: 506,
  livingAreaUnits: AreaUnit.M2,
  primaryFloorplan: {
    ref: 'demo/brf-traffen/units/5f4667f14900ad0018a1d051/floorplans/q7UmHhae-swC9uHgXHMPP',
    width: 1448,
    height: 2048,
  },
  floor: 1,
  unitNumber: '1001',
  primaryImage: {
    ref: 'demo/brf-traffen/units/5f4667f14900ad0018a1d051/images/6-ffPJ2ZwBjq9bjJwPK8B',
    width: 2048,
    height: 1280,
  },
  monthlyFee: 244,
  price: 140000,
}

const TestPage: NextPage = () => {
  const floorplan = FAKE_UNIT.primaryFloorplan
  const image = FAKE_UNIT.primaryImage

  return (
    <div className="container my-12">
      <h1 className="text-2xl my-2">Status Badges</h1>
      <div className="grid grid-flow-col gap-2">
        <StatusBadge status={UnitStatus.Showroom} />
        <StatusBadge status={UnitStatus.ComingSoon} />
        <StatusBadge status={UnitStatus.ForSale} />
        <StatusBadge status={UnitStatus.Reserved} />
        <StatusBadge status={UnitStatus.Booked} />
        <StatusBadge status={UnitStatus.Sold} />
        <StatusBadge status={UnitStatus.NotForSale} />
        <StatusBadge status={UnitStatus.Hidden} />
        <StatusBadge status={UnitStatus.Removed} />
      </div>

      <h1 className="text-2xl my-2">A Unit Preview Image</h1>
      {floorplan && <img src={getImageFromRef(floorplan, 'preview')} alt="Image Unit" width={320} height={200} />}

      <h1 className="text-2xl my-2">A Unit Image</h1>
      {image && <img src={getImageFromRef(image, '2k')} alt="Image Unit" width={image.width} height={image.width} />}
    </div>
  )
}

export default TestPage
