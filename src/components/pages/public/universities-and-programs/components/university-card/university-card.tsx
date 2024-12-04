import {ExclamationCircle} from '@/icons/exclamation-circle'
import {Props} from './types'
import {Students} from '@/icons/students'
import {Rating} from '@/icons/rating'
import {Avatar, Image} from '@/components/common'
import {LocationIcon} from '@/icons'
import {Frame} from '@/icons/frame'
import {getFindImage, getImageURL} from '@/utils/get-image'
import {Link} from 'react-router-dom'
import {cn} from '@/lib/utils'

export const UniversityCard = ({university}: Props) => {
  const iconClassNames = 'md:w-4 md:w-4'
  return (
    <Link
      className="bg-white border relative border-blue-4 duration-default rounded-2xl cursor-pointer overflow-hidden"
      to={`/universities/${university._id}`}
    >
      <div className="w-full flex flex-wrap md:flex-row flex-col-reverse md:justify-between overflow-hidden">
        <div className="w-full md:w-3/5 px-6">
          <h2 className="md:text-2xl text-blue font-bold md:mt-6 mt-3">{university.title}</h2>
          <div className="flex  items-center gap-x-[10px] mt-2 ">
            <LocationIcon className={iconClassNames} />
            <p className="text-blue-1 font-normal text-xs md:text-sm">{university.country} </p>
          </div>
          <hr className="md:mt-[30px] mt-4" />
          <ul className="mt-[30px] text-blue-1 text-xs md:text-sm">
            <li className="flex items-center gap-x-5 my-1 md:my-3">
              <ExclamationCircle className={cn(iconClassNames, 'mt-1')} />{' '}
              <span>{university.faculties.length}&nbsp; Programs</span>
            </li>
            <li className="flex items-center gap-x-5">
              <Students className={cn(iconClassNames, 'mt-1')} />
              <span className="flex gap-x-2 items-center my-1 md:my-3">{university.study_level || '-'}</span>
            </li>
            <li className="flex items-center gap-x-5 my-1 md:my-3">
              <Frame className={cn(iconClassNames, 'mt-1')} />{' '}
              <span> {university.contract.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
            </li>
            <li className="flex items-center gap-x-5 my-1 md:my-3 md:mb-8 mb-4">
              <Rating className={cn(iconClassNames, 'mt-1')} />{' '}
              {university.applicationsCount ? <span> ={university.applicationsCount}</span> : '-'}
            </li>
          </ul>
        </div>
        <div className="overflow-hidden w-full md:w-2/5">
          <Image
            imageClassName="md:min-h-full min-h-[160px] md:max-h-full max-h-[160px] md:rounded-r-2xl rounded-br-none w-full md:!w-96"
            src={getImageURL(getFindImage(university?.media as any))}
            alt={university.title}
            className="h-full min-w-full"
            defaultImageSrc="/images/default-university.png"
          />
        </div>
      </div>
      <div className="flex border justify-center items-center w-16 h-16 py-[6px] shadow rounded absolute top-[30px] right-[30px] bg-white">
        <Avatar type="university" src={getImageURL(university.logo)} />
      </div>
    </Link>
  )
}
