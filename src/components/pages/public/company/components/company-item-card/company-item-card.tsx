import {Avatar, Button} from '@/components/common'
import {BookmarkIcon, LocationIcon} from '@/icons'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'
import {useLikeUniversityMutation} from '@/features/university'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const CompanyItemCard = ({company}: Props) => {
  const [likeUniversity, {isLoading}] = useLikeUniversityMutation()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onLikeUniversity = async () => {
    handleRequest({
      request: async () => {
        const result = await likeUniversity({id: company?._id})
        return result
      },
      onSuccess: () => {
        toast({title: 'Successfully University Liked !'})
      },
    })
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-blue-4">
      <div className="w-full p-2 h-32 opacity-70 bg-slate-100 rounded-tl-2xl rounded-tr-2xl relative">
        <div className="w-20 h-20 shadow-md md:w-[116px] md:h-[116px]  bg-white rounded-2xl p-5 border-[1px] border-blue-5 flex justify-center items-center  absolute -bottom-10 right-2 md:left-[34px] border-1">
          <Avatar
            baseClassName="bg-white"
            className="w-full bg-white text-center"
            src={getImageURL(company.logo as any)}
            fullName={company.title}
            type="company"
          />
        </div>
      </div>
      <div className="w-full h-[150px] bg-white px-[34px]">
        <div className="flex justify-between h-full">
          <div className="mt-[62px]">
            <h2 className="text-xl md:text-2xl text-blue font-bold ">{company.title}</h2>
            <div className="flex items-center gap-x-[10px] mt-1 text-sm font-normal text-blue-1">
              <LocationIcon className="w-4 h-4" />{' '}
              <span>
                {company.city} {company.country}
              </span>
            </div>
          </div>
          <div className="h-full flex items-end pb-[27px] ">
            <Button
              onClick={onLikeUniversity}
              variant="outline"
              loading={isLoading}
              className="text-sm leading-6 font-normal px-5 py-3 rounded-[10px]"
              icon={<BookmarkIcon className="w-4 h-4" />}
            >
              Save company
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
