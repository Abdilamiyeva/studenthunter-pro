import {Avatar, Image} from '@/components/common'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const ReviewCard = ({review}: Props) => (
  <div className="border border-blue-1 rounded-lg md:rounded-2xl p-4 md:p-10">
    <div className="flex items-center gap-2.5">
      <Avatar
        src={getImageURL(review?.imageURL)}
        fullName={review.name}
        className="w-20 h-20"
        imageClassName="block md:hidden w-11 h-11"
      />
    </div>
    <Image
      src={review.imageURL}
      alt={review.name}
      className="!hidden md:block"
      imageClassName="hidden md:block w-20 h-20 rounded-full"
    />
    <p className="mt-0 mb-6 md:mt-6 md:mb-10 text-xs md:text-sm italic font-light leading-4.5 md:leading-6">
      “{review.review}”
    </p>
    <div>
      <h6 className="text-base md:text-xl font-bold leading-4 md:leading-7.5">{review.name}</h6>
      <span className="text-xs md:text-sm leading-4.5 md:leading-6">{review.occupation}</span>
    </div>
  </div>
)
