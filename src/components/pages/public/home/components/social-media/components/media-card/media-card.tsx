import {Image} from '@/components/common'
import {Props} from './types'
import {MediaImageIcon, VideoPlayIcon} from '@/icons'
import {InstagramIcon} from '../../icons'

export const MediaCard = ({mediaPost}: Props) => (
  <div className="relative rounded-2xl overflow-hidden min-w-[220px] h-[220px] md:min-w-[300px] md:h-[336px] group">
    <Image
      src={mediaPost.thumbnail}
      alt={mediaPost.source}
      className="absolute top-0 left-0 min-w-full min-h-full"
      imageClassName="absolute w-full h-full !duration-300 !transition group-hover:scale-105 cursor-pointer"
    />
    <a href="https://instagram.com" target="_blank" className="absolute top-0 left-0 w-full h-full" />
    {
      {
        video: (
          <button className="border-2 border-white rounded-full w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-content-center bg-white/40 text-white">
            <VideoPlayIcon className="w-9 h-9" />
          </button>
        ),
        image: (
          <button className="absolute top-5 right-5 text-white">
            <MediaImageIcon />
          </button>
        ),
      }[mediaPost.type]
    }
    <button className="absolute md:bottom-5 md:right-5 bottom-3 right-3 text-white">
      {
        {
          instagram: <InstagramIcon className="md:w-8 md:h-8" />,
        }[mediaPost.source]
      }
    </button>
  </div>
)
