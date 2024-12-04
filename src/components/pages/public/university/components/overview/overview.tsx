import {Button} from '@/components/common'
import {Display, ShareIcon, TelephoneFrame, ReportFlagIcon, MailIcon} from '@/icons'
import {ExclamationCircle} from '@/icons/exclamation-circle'
import {Frame} from '@/icons/frame'
import {Rating} from '@/icons/rating'
import {Students} from '@/icons/students'
import {Props} from './types'
import {useToast} from '@/components/ui/use-toast'
import {useNavigate} from 'react-router-dom'

export const OverviewCard = ({overview}: Props) => {
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
    <div className="px-4 md:px-7 py-5 md:rounded-2xl md:border md:border-blue-4">
      <h2 className="text-blue text-xl mb-5 font-bold">Overview</h2>
      <div className="flex items-center gap-x-3 my-2">
        <div className="bg-blue-7 p-3 rounded-lg flex justify-center items-center">
          <ExclamationCircle className="ml-1 mt-1" />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Programs</p>
          <p className="text-blue font-bold text-sm ">{overview.faculties?.length}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-3 my-2">
        <div className="bg-blue-7 p-3 rounded-lg flex justify-center items-center">
          <Students className="ml-1 mt-1" />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Study Level</p>
          <p className="text-blue font-bold text-sm flex items-center gap-1">{overview.study_level || '-'}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-3 my-2">
        <div className="bg-blue-7 p-3 rounded-lg flex justify-center items-center">
          <Frame className="!ml-1 !mt-1" />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Tuition Fee</p>
          <p className="text-blue font-bold text-sm ">
            {overview?.contract?.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-3 my-2">
        <div className="bg-blue-7 p-3 rounded-lg flex justify-center items-center">
          <Rating />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Rating</p>
          <p className="text-blue font-bold text-sm ">
            {overview.applicationsCount ? `=${overview.applicationsCount}` : '-'}
          </p>
        </div>
      </div>
      <h2 className="text-blue text-xl mb-2 font-bold mt-8">Contact Information</h2>
      <div className="flex items-center gap-x-3 md:py-3 py-1">
        <MailIcon className="mt-px w-4 h-4" />
        <p className="text-blue-2 font-normal leading-5 text-sm">{overview.email || '-'}</p>
      </div>
      <div className="flex items-center gap-x-3 md:py-3 py-1">
        <TelephoneFrame className="mt-px w-4 h-4" />
        <p className="text-blue-2 font-normal leading-5 text-sm">{overview.phone_number || '-'}</p>
      </div>
      <div className="flex items-center gap-x-3 md:py-3 py-1">
        <Display className="mt-1" />
        <p className="text-blue-2 font-normal leading-5 text-sm">{overview.website || '-'}</p>
      </div>
      <div className="flex mt-8 gap-3 md:gap-4">
        <Button
          variant="outline"
          icon={<ShareIcon className=" w-4 h-4" />}
          className="border w-full  text-xs px-5 py-3 "
          onClick={copyToClipboard}
        >
          <span className="text-sm">Share</span>
        </Button>
        <Button
          onClick={() => navigate('/contact')}
          variant="outline"
          icon={<ReportFlagIcon className=" w-4 h-4" />}
          className="border w-full text-xs xs px-5 py-3"
        >
          <span className=" text-sm">Report university</span>
        </Button>
      </div>
    </div>
  )
}
