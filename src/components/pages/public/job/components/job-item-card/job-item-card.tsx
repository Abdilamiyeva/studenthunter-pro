import {Avatar, Button} from '@/components/common'
import {BookmarkIcon} from '@/icons'
import {Link} from 'react-router-dom'
import {Props} from './types'
import {formatDistance} from 'date-fns'
import {useApplyJobMutation, useLikeJobMutation} from '@/features/jobs'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {getFindImage, getImageURL} from '@/utils/get-image'

export const JobItemCard = ({vacancy}: Props) => {
  const [applyJob, {isLoading}] = useApplyJobMutation()
  const [likeJob, {isLoading: likingJob}] = useLikeJobMutation()

  const handleRequest = useHandleRequest()
  const {toast} = useToast()
  const applyJobHandle = async () => {
    handleRequest({
      request: async () => {
        const result = await applyJob({id: vacancy._id})
        return result
      },
      onSuccess: async () => {
        toast({
          title: 'Sucessfully Applayed Job !',
        })
      },
    })
  }

  const likeJobHandle = async () => {
    handleRequest({
      request: async () => {
        const result = await likeJob({id: vacancy._id})
        return result
      },
      onSuccess: async () => {
        toast({
          title: 'Successfully Saved !',
        })
      },
    })
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-blue-4">
      <div className="w-full p-2 h-32 opacity-70  bg-slate-100 rounded-tl-2xl rounded-tr-2xl relative">
        <div className="w-20 h-20 shadow-md md:w-[116px] md:h-[116px]  bg-white rounded-2xl p-5 border-[1px] border-blue-5 flex justify-center items-center  absolute -bottom-10 right-2 md:left-10 border-1">
          <Avatar
            baseClassName="bg-transparent"
            className="w-full text-center"
            src={getImageURL(getFindImage(vacancy.company.media as any))}
            fullName={vacancy.company.title}
            type="vacancy"
          />
        </div>
      </div>
      <div className="w-full h-40 bg-white">
        <div className="flex justify-between h-full items-end px-10 pb-4">
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl text-blue font-bold ">
              <span>{vacancy.job_title}</span>
            </h2>
            <Link to={`/company/${vacancy.company._id}`} className="text-base font-normal text-blue-1 my-2">
              {vacancy.company.title}
            </Link>
            <p className="text-sm mt-2 flex items-center gap-x-[10px] leading-[21px] text-muted-foreground">
              {vacancy.job_type} <div className="w-1 h-1 bg-blue" /> Posted{' '}
              {formatDistance(new Date(vacancy.created_at), new Date(), {addSuffix: false} || Date)?.replace(
                'about',
                '',
              )}{' '}
              ago
            </p>
          </div>
          <div className="w-max flex items-center gap-x-2 ">
            <Button
              loading={likingJob}
              onClick={likeJobHandle}
              variant="outline"
              className="text-sm px-10 py-[11px] w-max"
              icon={<BookmarkIcon className="!text-xs" />}
            >
              Save job
            </Button>
            <Button
              loading={isLoading}
              onClick={applyJobHandle}
              variant="default"
              className="px-[78px] py-[11px] text-sm w-max"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
