import {ArrowRightSm} from '@/icons'
import {Frame} from '@/icons/frame'
import {Link} from 'react-router-dom'

export const LivingConsts = () => (
  <div className="w-full">
    <div className="flex gap-x-4">
      <p className="text-sm text-blue-2 font-normal leading-normal">To always see correct tuition fees.</p>
      <p className="flex items-center gap-x-4">
        <Link to={'/'} className="text-ms font-normal leading-normal hover:underline text-[#0063FF] flex">
          <span>Visit university page</span> <ArrowRightSm className="mt-2 ml-4 w-5 h-5" />
        </Link>
      </p>
    </div>
    <div className="p-6 bg-blue-7 my-5">
      <div className="inline-flex  p-4 items-center gap-x-1 rounded-lg border border-blue-4">
        <Frame className="mt-1" />
        <span className="text-blue font-bold text-xl leading-8">2,500,000</span>{' '}
        <span>
          <b>UZS</b> / <span className="leading-3 text-blue-3">year</span>
        </span>
      </div>
      <p className="text-xs font-normal leading-3 text-blue-2 mt-2">
        Based on the tuition of <span className="font-bold text-blue">$25,000 USD</span> per year
      </p>
    </div>
  </div>
)
