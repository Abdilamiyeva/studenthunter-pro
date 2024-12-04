import {Button, Image} from '@/components/common'
import {Props} from './types'
import {BookmarkIcon, LocationIcon} from '@/icons'
import {getFindImage, getImageURL} from '@/utils/get-image'
import {useApplyUniversityMutation, useLikeApplicantUniversityMutation} from '@/features/applicant/applicant'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useNavigate, useParams} from 'react-router-dom'
import {useGetUserQuery} from '@/features/auth'
import {useToast} from '@/components/ui/use-toast'
import {Tooltip, TooltipContent, TooltipProvider} from '@/components/ui/tooltip'

export const UniversityItemCard = ({universityItem, selectProgram}: Props) => {
  const {id} = useParams()
  const [applyUniversity, {isLoading}] = useApplyUniversityMutation()
  const {data: {data: user} = {}} = useGetUserQuery('')
  const handleRequest = useHandleRequest()
  const [likeUniversity, {isLoading: isLiking}] = useLikeApplicantUniversityMutation()
  const navagate = useNavigate()
  const {toast} = useToast()
  const onApplyUniversity = async () => {
    if (Object.keys(user || {}).length) {
      handleRequest({
        request: async () => {
          const result = await applyUniversity({
            university_id: id as string,
            applicant_id: user?.applicant?._id as string,
            program_id: selectProgram,
          })
          return result
        },
        onSuccess: () => {
          toast({title: 'Successfully University Program Applyed !'})
        },
      })
    } else {
      navagate('/auth/login')
    }
  }

  const likeUniversityHandle = async () => {
    if (Object.keys(user || {}).length) {
      handleRequest({
        request: async () => {
          const result = await likeUniversity({
            university_id: id as string,
            applicant_id: user?.applicant?._id as string,
            is_add: true,
          })
          return result
        },
        onSuccess: () => {
          toast({title: 'Successfully University Liked!'})
        },
      })
    } else {
      navagate('/auth/login')
    }
  }

  return (
    <div className="md:mt-10 mt-5">
      <div className="border border-blue-4 rounded-2xl relative overflow-hidden">
        <Image
          defaultImageSrc="/images/default-university-image.png"
          className="md:max-h-56 md:h-56 max-h-28 h-28 overflow-hidden min-w-full "
          imageClassName="min-w-full min-h-full"
          alt={universityItem?.title}
          src={getImageURL(getFindImage((universityItem?.media as any) || []))}
        />

        <div className="relative p-2 md:w-28 md:h-28 w-10 h-10 md:rounded-md overflow-hidden flex justify-center items-center rounded-sm  bg-white md:py-7 md:left-8 left-3 md:-top-16 -top-24 shadow-lg">
          <Image src="" className="max-w-full" imageClassName="w-full h-full" alt={universityItem.title} />
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full px-4 md:container py-2">
            <h1 className="md:text-2xl font-bold leading-8.5 -mt-12 md:mb-4">{universityItem?.title}</h1>
            <div className="flex text-xs md:text-base items-center md:mb-7 gap-x-2">
              <LocationIcon className="w-3 h-3 md:w-5 md:h-5" />
              {universityItem?.country}
            </div>
          </div>
          <div className="flex w-full md:gap-4 gap-3 md:justify-end md:pr-10 md:pb-8 p-4 md:p-0">
            <Button
              className="md:px-16 md:h-12 h-10 text-sm md:text-base w-full md:w-auto"
              variant="outline"
              onClick={likeUniversityHandle}
              loading={isLiking}
              icon={<BookmarkIcon className="w-3.5 md:w-5" />}
            >
              Save
            </Button>
            <TooltipProvider>
              <Tooltip>
                <Button
                  loading={isLoading}
                  disabled={Boolean(!selectProgram?.length)}
                  className="md:px-16 md:h-12 h-10 text-sm md:text-base w-full md:w-auto"
                  variant="default"
                  onClick={onApplyUniversity}
                >
                  Apply
                </Button>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  )
}