import {Button} from '@/components/common'
import {Display, ShareIcon, TelephoneFrame, ReportFlagIcon, StopwatchIcon, AttedanceIcon, MailIcon} from '@/icons'
import {Frame} from '@/icons/frame'
import {Students} from '@/icons/students'
import {Props} from './types'
import {ClockIcon} from '@radix-ui/react-icons'
import {SubjectIcon} from '@/icons/subject'
import {useToast} from '@/components/ui/use-toast'

export const OverviewCard = ({program}: Props) => {
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
    <div className="px-7 py-5 rounded-2xl border border-blue-4">
      <h2 className="text-blue text-xl mb-5 font-bold">Overview</h2>
      <div className="flex items-center gap-x-3 my-[15px]">
        <div className="w-10 h-10 rounded-[10px] bg-blue-7 text-blue-2 flex justify-center items-center">
          <Students className="ml-1 mt-1" />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Study Level</p>
          <p className="text-blue font-bold text-sm flex items-center gap-1">{program.program}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-3  text-blue-2 my-[15px]">
        <div className="w-10 h-10 rounded-[10px] bg-blue-7 flex justify-center items-center">
          <ClockIcon />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Duration</p>
          <p className="text-blue font-bold text-sm ">{program.duration}-years</p>
        </div>
      </div>

      <div className="flex items-center gap-x-3 my-[15px]">
        <div className="w-10 h-10 rounded-[10px] text-blue-2 bg-blue-7 flex justify-center items-center">
          <StopwatchIcon className="!ml-1 !mt-1" />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Format</p>
          <p className="text-blue font-bold text-sm ">{program.format || '-'}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-3 my-[15px]">
        <div className="w-10 h-10 rounded-[10px] text-blue-2  bg-blue-7 flex justify-center items-center">
          <Frame className="mt-1 ml-1" />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Tuition Fee</p>
          <p className="text-blue font-bold text-sm ">
            {program.fee.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) || '-'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-3 my-[15px]">
        <div className="w-10 h-10 rounded-[10px] text-blue-2  bg-blue-7 flex justify-center items-center">
          <AttedanceIcon className="mt-1 ml-1" />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Attendance</p>
          <p className="text-blue font-bold text-sm ">
            {program.fee.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) || '-'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 my-[15px]">
        <div className="w-10 h-10 rounded-[10px] text-blue-2  bg-blue-7 flex justify-center items-center">
          <SubjectIcon className="mt-1 ml-1" />
        </div>
        <div>
          <p className="text-blue-2 text-xs leading-4">Main Subject</p>
          <p className="text-blue font-bold text-sm ">{program.subject || '-'}</p>
        </div>
      </div>
      <h2 className="text-blue text-xl mb-2 font-bold">Contact Information</h2>
      <div className="flex gap-x-3 items-center">
        <div className="w-10 h-10 rounded-[10px] text-blue-2 bg-transparent flex justify-center items-center">
          <MailIcon className="h-4 w-4 !ml-1 !mt-1" />
        </div>
        <p className="text-blue-2 font-normal leading-5 text-sm">hultadmission@gmail.com</p>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="w-10 h-10 rounded-[10px] text-blue-2 bg-transparent flex justify-center items-center">
          <TelephoneFrame className="ml-1 w-4 h-4 mt-px" />
        </div>
        <p className="text-blue-2 font-normal leading-5 text-sm">+1 617-746-1990</p>
      </div>
      <div className="flex items-center gap-x-3 mb-8">
        <div className="w-10 h-10 rounded-[10px] text-blue-2 bg-transparent flex justify-center items-center">
          <Display className="w-[19px] h-[19px] mt-1 ml-2" />
        </div>
        <p className="text-blue-2 font-normal leading-5 text-sm">www.hult.edu</p>
      </div>
      <div className="flex justify-between gap-x-3">
        <Button
          variant="outline"
          onClick={copyToClipboard}
          icon={<ShareIcon className="w-4 h-4" />}
          className="border text-xs px-6 gap-x-1 py-3 "
        >
          <span className="text-sm">Share</span>
        </Button>
        <Button
          variant="outline"
          icon={<ReportFlagIcon className="w-4 h-4" />}
          className="border gap-x-1 text-xs xs px-4 py-3"
        >
          <span className="text-sm">Report university</span>
        </Button>
      </div>
    </div>
  )
}
