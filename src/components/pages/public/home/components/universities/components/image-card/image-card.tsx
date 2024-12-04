import {Button, Image} from '@/components/common'
import {Props} from './types'
import {Link} from 'react-router-dom'

export const ImageCard = ({src, title}: Props) => (
  <div className="w-[524px] h-[430px] overflow-hidden relative rounded-2xl card_Slider">
    <Image src={src} alt="Student Hunter" className="w-full h-full " />
    <div className="absolute bottom-0 w-full z-50 card_Slider h-56 text-white flex flex-col justify-end items-center gap-x-4">
      <h2 className="text-sm text-center font-bold leading-5 md:leading-10 md:text-2xl">{title}</h2>
      <Link to={'/universities'}>
        <Button
          variant="outline"
          className="bg-transparent text-white border my-4 hover:border-1 hover:bg-white hover:text-blue font-normal md:px-5 md:py-[13px] px-2 py-1.5 rounded-[12px] mb-6 text-xs leading-4 md:text-2xl md:leading-8.5"
        >
          More details
        </Button>
      </Link>
    </div>
  </div>
)
