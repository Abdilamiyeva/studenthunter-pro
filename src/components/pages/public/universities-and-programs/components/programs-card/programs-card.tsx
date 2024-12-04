import {Image} from '@/components/common'
import {AttedanceIcon, LocationIcon, StopwatchIcon} from '@/icons'
import {Frame} from '@/icons/frame'
import {Students} from '@/icons/students'
import {SubjectIcon} from '@/icons/subject'
import {ClockIcon} from '@radix-ui/react-icons'
import {Props} from './types'
import {useNavigate} from 'react-router-dom'
import {cn} from '@/lib/utils'
import {getImageURL} from '@/utils/get-image'

export const ProgramsCard = ({program}: Props) => {
  const navigate = useNavigate()
  const iconClassNames = 'w-3 h-3 md:w-4 md:h-4'
  const textNoWrap = 'whitespace-nowrap text-xs md:text-sm overflow-hidden text-ellipsis'
  return (
    <div
      className="bg-white border border-blue-4  duration-default rounded-2xl md:pl-4 cursor-pointer overflow-hidden"
      onClick={() => navigate(`/programs/${program._id}`)}
    >
      <div className="w-full flex flex-wrap md:flex-nowrap md:flex-row flex-col-reverse md:justify-between overflow-hidden">
        <div className="px-2 md:px-4 md:p-0 w-full">
          <h2 className="md:text-2xl text-blue font-bold md:mt-6 mt-3">{program.program}</h2>
          <p className="text-xs md:text-sm font-normal leading-6 text-blue-2 md:mb-5 md:mt-2 line-clamp-2 my-3">
            {program.about ? `${program?.about?.replace(/<[^>]*>?/gm, '')}` : '-'}
          </p>
          <hr className="ml-px mr-10" />
          <div className="grid grid-cols-3 mt-3 md:mt-10 gap-y-3 text-sm md:text-base mb-10 leading-5">
            <div className="text-blue-1">
              <div className="flex items-center gap-x-5">
                <Students className={cn('mt-1', iconClassNames)} /> <span className={textNoWrap}>{program.level}</span>
              </div>
            </div>
            <div className="text-blue-1">
              <div className="flex items-center gap-x-5">
                <Frame className={iconClassNames} />{' '}
                <span className={textNoWrap}>
                  {program.fee.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} yearly
                </span>
              </div>
            </div>

            <div className="text-blue-1">
              {program.duration ? (
                <div className="flex items-center gap-x-5">
                  <ClockIcon className={iconClassNames} /> <span className={textNoWrap}>{program.duration}-years</span>
                </div>
              ) : (
                '-'
              )}
            </div>

            <div className="text-blue-1">
              <div className="flex items-center gap-x-5">
                <AttedanceIcon className={cn('mt-1', iconClassNames)} />{' '}
                <span className={textNoWrap}>{program?.attendance || '-'}</span>
              </div>
            </div>
            <div className="text-blue-1">
              {program.format ? (
                <div className="flex items-center gap-x-5">
                  <StopwatchIcon className={iconClassNames} /> <span className={textNoWrap}>{program?.format}</span>
                </div>
              ) : (
                '-'
              )}
            </div>
            <div className="text-blue-1">
              <div className="flex items-center gap-x-5">
                <SubjectIcon className={iconClassNames} /> <span className={textNoWrap}>{program.program}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center my-7 md:gap-x-4 gap-x-2">
            <Image
              src={getImageURL(program.university_id.logo)}
              imageClassName="object-cover min-h-full"
              className=" w-12 h-12 shadow-md border border-blue-4 rounded-sm overflow-hidden"
            />

            <div>
              <h2 className="text-blue text-base  mb-px font-bold leading-7">{program.university_id.title}</h2>
              <div className="flex items-center mb-1 gap-x-2">
                <LocationIcon className={cn('text-blue-1 w-3 h-3')} />
                <span className="text-blue-1 text-xs md:text-base font-normal leading-4 md:leading-tight">
                  {program.university_id.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
