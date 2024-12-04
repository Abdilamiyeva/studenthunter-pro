import {DotsDropdown, Image} from '@/components/common'
import {Props} from './types'
import {BookmarkIcon, CircleXIcon, ReportFlagIcon} from '@/icons'
import {Link, useNavigate} from 'react-router-dom'
import {formatDistance} from 'date-fns'
import {getImageURL} from '@/utils/get-image'
import {useLikeJobMutation, useUnLikeJobMutation} from '@/features/jobs'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useGetUserQuery} from '@/features/auth'

export const JobCard = ({job}: Props) => {
  const navigate = useNavigate()
  const [likeBlog, {isLoading: isLikeing}] = useLikeJobMutation()
  const [unLikeBlog, {isLoading: isunLiking}] = useUnLikeJobMutation()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()
  const {data: {data: user} = {}} = useGetUserQuery('')
  const onLikeHandle = async () => {
    if (Object.keys(user || {}).length) {
      handleRequest({
        request: async () => {
          const result = await likeBlog({id: job._id})
          return result
        },
        onSuccess: () => {
          toast({title: 'Successfully Saved !'})
        },
      })
    } else {
      navigate('/auth/login')
    }
  }

  const unLikeHandle = async () => {
    if (Object.keys(user || {}).length) {
      handleRequest({
        request: async () => {
          const result = await unLikeBlog({id: job._id})
          return result
        },
        onSuccess: () => {
          toast({title: 'Record Successfully Saved !'})
        },
      })
    } else {
      navigate('/auth/login')
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 border border-blue-4 hover:border-blue duration-default relative rounded-2xl py-4 px-5">
      <Image
        src={getImageURL(job.company.logo)}
        className="w-11 h-11 rounded-full"
        imageClassName="max-w-full rounded-full"
      />
      <div className="w-full">
        <div className="w-full md:static absolute top-5 left-24">
          <div className="w-full flex items-center justify-between">
            <h6 className="text-base font-bold leading-6 cursor-pointer">
              <Link to={`/jobs/${job._id}`}>{job.job_title}</Link>
            </h6>
            <div>
              <div className="flex items-center gap-3 text-blue-2">
                <p className="text-sm leading-5 hidden md:inline-flex">
                  Posted &nbsp;
                  {formatDistance(new Date(job.created_at), new Date(), {addSuffix: false} || Date)?.replace(
                    'about',
                    '',
                  )}
                  &nbsp; ago
                </p>
                <DotsDropdown
                  contentClassName="w-40"
                  className="text-blue-2"
                  buttons={[
                    {
                      label: 'Save',
                      icon: <BookmarkIcon className="w-4 h-4" />,
                      loading: isLikeing,
                      onClick: () => onLikeHandle(),
                    },
                    {
                      label: 'Not interested',
                      loading: isunLiking,
                      onClick: () => unLikeHandle(),
                      icon: <CircleXIcon className="w-4 h-4" />,
                    },
                    {
                      label: 'Report job',
                      icon: <ReportFlagIcon className="w-4 h-4" />,
                      onClick: () => navigate('/contact'),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-sm leading-5 text-blue-2 mt-0.5 mb-2">
            <p>{job.country}</p>
            <div className="w-1 h-1 bg-blue-2" />
            <p>{job.company?.title}</p>
          </div>
        </div>
        <p className="text-sm text-blue-2 line-clamp-2 leading-5">{job.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {job.skills.map((tag, index) => (
            <button
              key={index}
              className="text-xs font-bold leading-4 text-blue-2 bg-blue-7 px-4 py-2 rounded-md hover:text-blue duration-default"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
