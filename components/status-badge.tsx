import { statusBgClassMap, statusNameMap, UnitStatus } from 'data-access'

export interface StatusBadgeProps {
  status: UnitStatus
}
export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`${statusBgClassMap[status]} inline-block px-2 py-1 text-sm rounded-sm text-white uppercase`}
    >
      {statusNameMap[status]}
    </span>
  )
}
