import {Button} from '@/components/common'
import {HomeIcon, InfoIcon, LocationIcon, ReportFlagIcon, ShareIcon, UserIcon} from '@/icons'
import {Props} from './types'
import dayjs from 'dayjs'
import {useNavigate} from 'react-router-dom'
import {useToast} from '@/components/ui/use-toast'

export const DetailCard = ({vacancy}: Props) => {
  const navigate = useNavigate()
  const {toast} = useToast()
  const copyToClipboard = async () => {
    try {
      const urlToCopy = window.location.href
      await navigator.clipboard.writeText(urlToCopy)
      toast({title: 'Copy clipboard'})
    } catch (err) {
      console.error('Failed to copy URL to clipboard', err)
    }
  }
  return (
    <div className="w-full mt-10 border-[1px] flex flex-col border-blue-4 pt-5 pb-[29px] px-7 rounded-2xl">
      <h1 className="text-xl leading-[27px] font-bold text-blue">
        {vacancy.salary.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
      </h1>
      <p className="text-base text-blue-2 font-extralight">Monthly Salary</p>
      <div className="flex items-center mt-5 gap-x-3">
        <div className="w-10 h-10 rounded-[10px] leading-6 text-blue-2  bg-blue-7 flex justify-center items-center">
          <HomeIcon className="text-xs h-4 w-4" />
        </div>
        <div>
          <span className="text-xs text-blue-2 font-normal ">Job Type</span>
          <h3 className="text-blue text-sm font-bold">{vacancy.job_type}</h3>
        </div>
      </div>

      <div className="flex mt-[15px] items-center gap-x-3">
        <div className="w-10 h-10 rounded-[10px] text-blue-2  bg-blue-7 flex justify-center items-center">
          <InfoIcon className="text-sm h-5 w-5" />
        </div>
        <div>
          <span className="text-xs text-blue-2 font-normal ">Specialties</span>
          <h3 className="text-blue text-sm font-bold">{vacancy.specialties}</h3>
        </div>
      </div>

      <div className="flex  mt-[15px] items-center gap-x-3">
        <div className="w-10 h-10 rounded-[10px] text-blue-2  bg-blue-7 flex justify-center items-center">
          <LocationIcon className="text-sm h-4 w-4" />
        </div>
        <div>
          <span className="text-xs text-blue-2 font-normal ">Location</span>
          <h3 className="text-blue text-sm font-bold">{vacancy.country}</h3>
        </div>
      </div>

      <div className="flex  mt-[15px] mb-[37px] items-center gap-x-3">
        <div className="w-10 h-10 rounded-[10px] text-blue-2  bg-blue-7 flex justify-center items-center">
          <UserIcon className="text-sm h-4 w-4" />
        </div>
        <div>
          <span className="text-xs text-blue-2 font-normal ">Experience level</span>
          <h3 className="text-blue text-sm font-bold">{vacancy.experience_level}</h3>
        </div>
      </div>

      <div className="mb-5">
        <span className="text-blue-2 text-base font-normal">Data posted</span>
        <h2 className="text-blue text-lg font-bold"> {dayjs(new Date(vacancy.created_at)).format('DD MMMM, YYYY')}</h2>
      </div>

      <div className="flex justify-between gap-x-[23px">
        <Button
          variant="outline"
          icon={<ShareIcon className="w-4 h-4" />}
          className="border text-xs px-[30px] gap-x-1 py-3 "
          onClick={copyToClipboard}
        >
          <span className="text-sm">Share</span>
        </Button>
        <Button
          variant="outline"
          icon={<ReportFlagIcon className="w-4 h-4" />}
          className="border gap-x-1 text-xs xs px-[27px] py-3"
          onClick={() => navigate('/contact')}
        >
          <span className="text-sm">Report job</span>
        </Button>
      </div>
    </div>
  )
}
