import {cn} from '@/lib/utils'
import {Props} from './types'

export const DashboardCard = ({icon, iconParentClassName, actives, count, title}: Props) => (
  <div className="bg-white border border-blue-4 rounded-2xl p-4 md:p-7">
    <div className="flex items-center gap-4">
      <div className={cn('rounded-lg p-2.5', iconParentClassName)}>{icon}</div>
      <span className="text-blue-1 text-2xl leading-7.5">{title}</span>
    </div>
    <div className="grid grid-cols-2 mt-12">
      <div>
        <h5 className="text-4xl font-bold leading-10 mb-1">{actives}</h5>
        <p className="text-blue-1 leading-6.5">Active</p>
      </div>
      <div>
        <h5 className="text-4xl font-bold leading-10 mb-1">{count}</h5>
        <p className="text-blue-1 leading-6.5">{title}</p>
      </div>
    </div>
  </div>
)
