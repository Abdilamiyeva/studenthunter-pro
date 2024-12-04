import {FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon, TrashIcon} from '@/icons'
import {Avatar, Button} from '@/components/common'
import {EditButton} from '../edit-button'
import {EditForm} from './components'
import {useState} from 'react'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'
import dayjs from 'dayjs'
import {cn} from '@/lib/utils'
import {useDeleteVacancyMutation} from '@/features/jobs'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useNavigate} from 'react-router-dom'

export const Overview = ({vacancy}: Props) => {
  const [deleteVacancy, {isLoading: isDeleting}] = useDeleteVacancyMutation()
  const [open, setOpen] = useState(false)
  const handleRequest = useHandleRequest()
  const navigate = useNavigate()
  const {toast} = useToast()

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteVacancy({vacancyID: vacancy._id})
        return result
      },
      onSuccess: () => {
        navigate('/dashboard/vacancies')
        toast({title: 'Vacancy successfully deleted!'})
      },
    })
  }

  return (
    <section id="overview" className="section">
      <div className="flex flex-col sm:flex-row justify-between gap-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-x-8 gap-y-3 w-full sm:w-auto">
          <div className="w-32 h-32 rounded-full border border-blue overflow-hidden">
            <Avatar
              className="h-full"
              imageClassName="h-full"
              src={getImageURL(vacancy.company.logo)}
              fullName={vacancy.company.title}
            />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-blue text-xl font-semibold leading-8">{vacancy.job_title}</h1>
            <p>{vacancy.company.title}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end w-full sm:w-auto">
          <Button
            onClick={onDelete}
            loading={isDeleting}
            theme="orange"
            icon={<TrashIcon className="w-4 h-4" />}
            className="rounded px-5 py-1.5 font-bold leading-6.5 text-base"
          >
            Delete
          </Button>
          <div className="flex gap-x-2">
            {vacancy.company.socials?.telegram && (
              <a target="_blank" href={vacancy.company.socials.telegram}>
                <TelegramIcon className="w-6 h-6" />
              </a>
            )}
            {vacancy.company.socials?.instagram && (
              <a target="_blank" href={vacancy.company.socials.instagram}>
                <InstagramIcon className="w-6 h-6" />
              </a>
            )}
            {vacancy.company.socials?.linkedin && (
              <a target="_blank" href={vacancy.company.socials.linkedin}>
                <LinkedinIcon className="w-6 h-6" />
              </a>
            )}
            {vacancy.company.socials?.facebook && (
              <a target="_blank" href={vacancy.company.socials.facebook}>
                <FacebookIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 border border-blue-4 rounded-2xl py-3 px-5 sm:py-5 sm:px-8 ">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h2 className="text-blue text-xl font-bold leading-8 mb-2 sm:mb-0">Overview</h2>
          <EditButton onClick={() => setOpen(true)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Applications</p>
              <div
                className={cn(
                  'w-max px-4 py-1 text-white text-sm font-bold leading-1 rounded',
                  vacancy.applied?.length ? 'bg-green' : 'bg-blue-1',
                )}
              >
                {vacancy.applied?.length || 'N/A'}
              </div>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Job title</p>
              <p className="font-bold leading-6">{vacancy.job_title || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Country</p>
              <p className="font-bold leading-6">{vacancy.country || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Job type</p>
              <p className="font-bold leading-6">{vacancy.job_type || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Monthly Salary</p>
              <p className="font-bold leading-6">{vacancy.salary || 'N/A'}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-11" />
            <div>
              <p className="text-blue-2 text-sm leading-5">Specialities</p>
              <p className="font-bold leading-6">{vacancy.specialties || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">City</p>
              <p className="font-bold leading-6">{vacancy.city || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Experience level</p>
              <p className="font-bold leading-6">{vacancy.experience_level || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Data posted</p>
              <p className="font-bold leading-6">{dayjs(vacancy.created_at).format('DD.MM.YYYY')}</p>
            </div>
          </div>
        </div>
      </div>
      <EditForm open={open} close={() => setOpen(false)} />
    </section>
  )
}
