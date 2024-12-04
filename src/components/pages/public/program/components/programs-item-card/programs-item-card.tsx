import {Button, Image} from '@/components/common'
import {Props} from './types'
import {BookmarkIcon, LocationIcon} from '@/icons'
import {getFindImage, getImageURL} from '@/utils/get-image'
import {useApplyProgrmMutation, useLikeApplicantUniversityMutation} from '@/features/applicant/applicant'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useGetUserQuery} from '@/features/auth'
import {useToast} from '@/components/ui/use-toast'
import {useNavigate} from 'react-router-dom'

export const ProgramsItemCard = ({program}: Props) => {
  const {data: {data: user} = {}} = useGetUserQuery('')
  const handleRequest = useHandleRequest()
  const [likeUniversity, {isLoading: isLiking}] = useLikeApplicantUniversityMutation()
  const [applyProgrm, {isLoading: isApplaying}] = useApplyProgrmMutation()
  const {toast} = useToast()
  const navagate = useNavigate()
  const likeUniversityHandle = async () => {
    if (Object.keys(user || {}).length) {
      handleRequest({
        request: async () => {
          const result = await likeUniversity({
            university_id: program.university_id._id,
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

  const applyProgramHandle = async () => {
    if (Object.keys(user || {}).length) {
      handleRequest({
        request: async () => {
          const result = await applyProgrm({
            university_id: program.university_id?._id,
            applicant_id: user?.applicant?._id as string,
            program_id: program._id,
          })
          return result
        },
        onSuccess: () => {
          toast({title: 'Successfully Application Sent!'})
        },
      })
    } else {
      navagate('/auth/login')
    }
  }

  return (
    <div className="md:mt-10 mt-5">
      <div className=" border border-blue-4 rounded-2xl relative overflow-hidden">
        <Image
          className="md:max-h-56 md:h-56 max-h-28 shadow rounded-lg h-28 overflow-hidden min-w-full "
          imageClassName="min-w-full min-h-full brightness-75"
          src={getImageURL(getFindImage(program.university_id?.media as any))}
          alt={program.university_id?.title}
          defaultImageSrc="/images/default-university-image.png"
        />
        <div className="relative p-2 md:w-28 md:h-28 w-10 h-10 md:rounded-md overflow-hidden flex justify-center items-center rounded-sm  bg-white md:py-7 md:left-8 left-3 md:-top-16 -top-24 shadow-lg">
          <Image
            className="max-w-full"
            imageClassName="w-full h-full"
            src={getImageURL(program?.university_id?.logo)}
            alt={program?.university_id.title}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full px-4 md:container py-2">
            <h1 className="md:text-2xl font-bold leading-8.5 -mt-12 md:mb-2">{program.program}</h1>
            <h1 className="md:text-base text-sm font-bold leading-8.5 md:mb-0 text-blue-1">
              {program.university_id.title}
            </h1>
            <div className="flex text-xs md:text-base text-blue-1  programs-center md:mb-7 gap-x-2">
              <LocationIcon className="w-3 h-3 md:w-5 md:h-5" />
              {program.university_id.country}
            </div>
          </div>
          <div className="flex programs-end justify-end w-full md:gap-4 gap-3 md:justify-end md:pr-10 md:p-6 p-4">
            <Button
              className="md:px-16 md:h-12 h-10 text-sm font-normal md:text-base w-full md:w-auto"
              variant="outline"
              loading={isLiking}
              onClick={likeUniversityHandle}
              icon={<BookmarkIcon className="w-3.5 md:w-4" />}
            >
              Save
            </Button>
            <Button
              loading={isApplaying}
              onClick={applyProgramHandle}
              className="md:px-16 md:h-12 h-10 font-medium text-sm md:text-base w-full md:w-auto"
              variant="default"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
