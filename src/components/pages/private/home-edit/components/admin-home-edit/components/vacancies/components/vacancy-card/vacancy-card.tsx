import {Avatar} from '@/components/common'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const VacancyCard = ({vacancy}: Props) => (
  <div className="bg-white shadow-box rounded-2xl">
    <div className="pt-6 pb-8 px-6 flex items-center gap-4 border-b border-blue-15">
      <Avatar
        src={getImageURL(vacancy.company.logo)}
        fullName={vacancy.company.title}
        imageClassName="min-w-[60px] min-h-[60px] rounded-full"
      />
      <div>
        <h5 className="text-base font-bold leading-6.5 mb-1">{vacancy.job_title}</h5>
        <div className="flex items-center gap-2.5">
          <span className="text-blue-1 text-xs leading-4">{vacancy.job_type}</span>
          <div className="w-1 h-1 bg-blue-1" />
          <span className="text-blue-1 text-xs leading-4">{vacancy.company.title}</span>
        </div>
      </div>
    </div>
  </div>
)
