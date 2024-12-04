import {ArrowRightSm} from '@/icons'
import {Frame} from '@/icons/frame'
import {Link} from 'react-router-dom'
import {Props} from './types'

export const TuitionFee = ({fee, universityId}: Props) => (
  <div className="w-full">
    <div className="flex gap-x-4">
      <p className="text-xs md:text-sm text-blue-2 font-normal leading-normal">To always see correct tuition fees.</p>
      <p className="flex items-center md:gap-x-4">
        <Link
          to={`/universities/${universityId}`}
          className="text-xs md:text-sm font-normal leading-normal hover:underline text-blue-9 flex"
        >
          <span>Visit university page</span> <ArrowRightSm className="mt-2 md:ml-4 w-5 h-5" />
        </Link>
      </p>
    </div>
    <div className="p-6 bg-blue-7 my-5">
      <div className="inline-flex  p-4 items-center gap-x-1 rounded-lg border border-blue-4">
        <Frame className="mt-1" />
        <span className="text-blue font-bold text-xl leading-8">
          {fee?.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
        </span>{' '}
        <span className="text-xs md:text-sm">
          <b>UZS</b> / <span className="leading-3 text-blue-3">year</span>
        </span>
      </div>
      <p className="text-xs font-normal leading-3 text-blue-2 mt-2">
        Based on the tuition of{' '}
        <span className="font-bold text-blue">
          {fee?.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} USD
        </span>{' '}
        per year
      </p>
    </div>
  </div>
)
