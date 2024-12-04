import {Avatar} from '@/components/common'
import {Props} from './types'
import {findImageURL, getImageURL} from '@/utils/get-image'

export const UniversityCard = ({university}: Props) => (
  <div className="bg-white shadow-box rounded-2xl overflow-hidden">
    <Avatar
      src={getImageURL(findImageURL(university.media))}
      fullName={university.title}
      className="h-[260px] w-full rounded-none"
      imageClassName="rounded-none"
      baseClassName="rounded-none"
    />
    <h4 className="font-bold leading-6.5 py-5 px-6">{university.title}</h4>
  </div>
)
