import {Avatar, Dropdown} from '@/components/common'
import {DotsColIcon} from '@/icons'
import {Link} from 'react-router-dom'
import {Vacancy} from '@/types/vacancy'
import {getImageURL} from '@/utils/get-image'
import {formatDistance} from 'date-fns'
import {Props} from './types'

export const VacancyCard = ({company, vacancy}: Props) => {
  const getAdditionalContent = (vac: Vacancy) => (
    <div className="flex items-center gap-3 text-blue-2">
      <p className="text-sm leading-5">
        {formatDistance(new Date(vac.created_at), new Date(), {addSuffix: false} || Date)?.replace('about', '')}
      </p>
      <Dropdown
        buttons={
          [
            // {
            //   label: 'Save',
            //   icon: <BookmarkIcon className="w-4 h-4" />,
            // },
            // {label: 'Not interested', icon: <CircleXIcon className="w-4 h-4" />},
            // {label: 'Report job', icon: <ReportFlagIcon className="w-4 h-4" />},
          ]
        }
      >
        <button>
          <DotsColIcon className="w-4 h-4" />
        </button>
      </Dropdown>
    </div>
  )

  return (
    <div
      key={vacancy._id}
      className="flex flex-col sm:flex-row items-start gap-x-5 gap-y-3 border border-blue-4 hover:border-blue-2 duration-default rounded-2xl py-4 px-5"
    >
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Avatar
          src={getImageURL(company.logo)}
          fullName={company.title}
          imageClassName="min-w-[44px] min-h-[44px] rounded-full"
        />
        <div className="block sm:hidden">{getAdditionalContent(vacancy)}</div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h6 className="text-base font-bold leading-6 cursor-pointer">
            <Link to="/jobs/job-id">Graphic Designer</Link>
          </h6>
          <div className="hidden sm:block">{getAdditionalContent(vacancy)}</div>
        </div>
        <div className="flex items-center gap-2.5 text-sm leading-5 text-blue-2 mt-0.5 mb-2">
          <p>Full time</p>
          <div className="w-1 h-1 bg-blue-2" />
          <p>Eliassen Group</p>
        </div>
        <p className="text-sm text-blue-2 leading-5">
          We're looking for a detail oriented, results driven, Graphic Designer that thrives working in start-up
          environments and is well versed in providing creative support. The ideal candidate for this role has a track
          record of operating with a sense of urgency, exceling in ...
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {['Full time', 'Freelance', 'Adobe'].map((tag, idx) => (
            <button
              key={idx}
              className="text-xs font-bold leading-4 text-blue-2 bg-blue-7 px-4 py-2 rounded-md hover:text-blue duration-default"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
