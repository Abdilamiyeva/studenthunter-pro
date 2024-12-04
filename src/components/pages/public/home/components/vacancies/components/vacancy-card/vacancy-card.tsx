import {Avatar} from '@/components/common'
import {Props} from './types'
import {useNavigate} from 'react-router-dom'
import {getImageURL} from '@/utils/get-image'

export const VacancyCard = ({vacancy}: Props) => {
  const navigate = useNavigate()

  return (
    <div className="rounded-2xl p-6 border border-blue-4">
      <div className="w-full flex justify-start">
        <div>
          <Avatar type="vacancy" src={getImageURL(vacancy.company.logo)} fullName={vacancy.company.title} />
        </div>
      </div>
      <h4 className="mt-4 mb-1 text-2xl font-bold leading-8.5 line-clamp-1">{vacancy.job_title}</h4>
      <div className="flex items-center gap-2.5 mb-6 text-blue-1 text-sm leading-5">
        <p>{vacancy.country}</p>
        <p className="text-xs">&#9632;</p>
        <p>{vacancy.company.title}</p>
      </div>
      <button onClick={() => navigate('/jobs')} className="text-sm leading-5 font-semibold border-b border-blue">
        See more
      </button>
    </div>
  )
}
