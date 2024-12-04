import {useMemo} from 'react'
import {Props} from './types'
import {cn} from '@/lib/utils'
import {VacancyApplicantStatus} from '@/constants/statusues'

export const StatusBtn = ({status}: Props) => {
  const themeClassName = useMemo(() => {
    switch (status) {
      case VacancyApplicantStatus.ACCEPTED:
        return 'bg-green'
      case VacancyApplicantStatus.REJECTED:
        return 'bg-orange'
      case VacancyApplicantStatus.SHORTLISTED:
        return 'bg-orange-6'
      case VacancyApplicantStatus.SAVED:
        return 'bg-blue-1'
      case VacancyApplicantStatus.NOT_SET:
        return 'bg-blue-3'
    }
  }, [status])

  return (
    <div
      className={cn(
        'relative text-sm font-semibold text-white leading-5 px-4 py-1 rounded-sm w-max mx-auto',
        themeClassName,
      )}
    >
      {
        {
          [VacancyApplicantStatus.ACCEPTED]: 'Accepted',
          [VacancyApplicantStatus.REJECTED]: 'Rejected',
          [VacancyApplicantStatus.SHORTLISTED]: 'Shortlisted',
          [VacancyApplicantStatus.SAVED]: 'Saved',
          [VacancyApplicantStatus.NOT_SET]: 'Not set',
        }[status]
      }
    </div>
  )
}
