import {Props} from './types'

export const DashboardCard = ({icon, text, count}: Props) => (
  <div className="bg-white border border-blue-4 rounded-2xl flex flex-col items-center py-5">
    {icon}
    <p className="text-blue-2 mt-3 mb-2.5 text-xs leading-4">{text}</p>
    <p className="text-2xl font-semibold leading-7.5">{count}</p>
  </div>
)
