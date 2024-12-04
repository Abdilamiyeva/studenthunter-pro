import {Image} from '@/components/common'
import {Props} from './types'

export const Avatar = ({src, headingTitle, subTitle}: Props) => (
  <div className="w-full flex justify-center flex-col items-center">
    <Image src={src} alt={subTitle} className="w-[288px] h-[288px] gap-6 rounded-full text-center" />
    <h2 className="text-center text-4xl font-bold text-blue">{headingTitle}</h2>
    <p className="text-center text-base font-normal">{subTitle}</p>
  </div>
)
