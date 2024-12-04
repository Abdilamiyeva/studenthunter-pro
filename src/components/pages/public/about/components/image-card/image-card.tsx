import {Image} from '@/components/common'
import {Props} from './types'

export const ImageCard = ({src}: Props) => (
  <div className="w-full">
    <Image src={src} alt="card image" className="h-[440px] w-full xl:w-[624px]" />
  </div>
)
