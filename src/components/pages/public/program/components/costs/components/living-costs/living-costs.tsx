import {ArrowRightSm} from '@/icons'
import {Link} from 'react-router-dom'
import {Props} from './types'

export const LivingConsts = ({program}: Props) => (
  <div className="w-full">
    <div className="flex gap-x-4">
      <p className="text-xs md:text-sm text-blue-2 font-normal leading-normal">To always see correct tuition fees.</p>
      <p className="flex items-center gap-x-4">
        <Link to={'/'} className="text-xs md:text-sm font-normal leading-normal hover:underline text-blue-9 flex">
          <span>Visit university page</span> <ArrowRightSm className="mt-2 md:ml-4 w-5 h-5" />
        </Link>
      </p>
    </div>
    {program.university_id?.living_costs ? (
      <div className="my-5">{program.university_id?.living_costs}</div>
    ) : (
      <div className="flex justify-center items-center h-20 text-blue-2">
        <p>No cost of living information not Found</p>
      </div>
    )}
  </div>
)
