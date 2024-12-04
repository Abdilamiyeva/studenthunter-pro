import {Image} from '@/components/common'
import {Props} from './types'
import {Link} from 'react-router-dom'

export const GuideCard = ({guidance}: Props) => (
  <div className="h-auto border border-blue-4 rounded-lg">
    <Image
      src={guidance.imageURL}
      alt={guidance.name}
      className="block min-w-full"
      imageClassName="block w-full md:h-48"
    />
    <div className="md:pt-5 md:pb-7 pt-3 pb-3 px-4 text-center">
      <h4 className="md:text-2xl font-bold leading-5 md:leading-8.5">{guidance.name}</h4>
      <p className="pt-2.5 md:pb-7 pb-3 text-xs md:text-base text-blue-2 leading-4.5 md:leading-6.5">
        {guidance.description}
      </p>
      <Link to={guidance.path} className="md:text-xl hover:border-b font-semibold leading-7.5 border-blue">
        {guidance.buttonName}
      </Link>
    </div>
  </div>
)
