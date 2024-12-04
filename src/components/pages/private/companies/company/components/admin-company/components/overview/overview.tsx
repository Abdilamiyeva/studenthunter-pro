import {Avatar, Button} from '@/components/common'
import {EditIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from '@/icons'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'
import {useMemo, useState} from 'react'
import {CompanyStatus} from '@/constants/statusues'
import {cn} from '@/lib/utils'
import {OverviewForm, ProfileForm} from './components'

export const Overview = ({company}: Props) => {
  const [openProfileEditForm, setOpenProfileEditForm] = useState(false)
  const [openOverviewEditForm, setOpenOverviewEditForm] = useState(false)
  const statusThemeClassName = useMemo(() => {
    switch (company.status) {
      case CompanyStatus.ACTIVE:
        return 'bg-green'
      case CompanyStatus.INACTIVE:
        return 'bg-orange'
      case CompanyStatus.PENDING:
        return 'bg-orange-6'
    }
  }, [company.status])

  return (
    <section id="overview" className="section">
      <div className="flex flex-col md:flex-row justify-between gap-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-x-7 gap-y-3">
          <Avatar
            src={getImageURL(company.logo)}
            fullName={company.title}
            className="min-w-[120px] min-h-[120px] rounded-full"
          />
          <div className="text-center sm:text-start">
            <p className="text-xl font-semibold leading-7.5 mb-0.5">{company.title}</p>
            <div className="flex items-center gap-x-2 text-blue-1 text-sm leading-5">{company.email}</div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-end justify-between">
          <Button
            onClick={() => setOpenProfileEditForm(true)}
            icon={<EditIcon className="w-3 h-3" />}
            className="px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
          >
            Edit
          </Button>
          <div className="flex gap-2">
            {company.socials?.telegram && (
              <a target="_blank" href={company.socials.telegram}>
                <TelegramIcon className="w-6 h-6" />
              </a>
            )}
            {company.socials?.instagram && (
              <a target="_blank" href={company.socials.instagram}>
                <InstagramIcon className="w-6 h-6" />
              </a>
            )}
            {company.socials?.linkedin && (
              <a target="_blank" href={company.socials.linkedin}>
                <LinkedinIcon className="w-6 h-6" />
              </a>
            )}
            {company.socials?.facebook && (
              <a target="_blank" href={company.socials.facebook}>
                <FacebookIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-1">
          <h5 className="text-xl font-bold leading-7.5">Overview</h5>
          <Button
            onClick={() => setOpenOverviewEditForm(true)}
            icon={<EditIcon className="w-3 h-3" />}
            className="w-full sm:w-auto px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
          >
            Edit
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Contract</p>
              <div
                className={cn(
                  'px-3 py-1.5 rounded text-sm font-medium leading-3.5 w-max text-white',
                  statusThemeClassName,
                )}
              >
                {
                  {
                    [CompanyStatus.ACTIVE]: 'Active',
                    [CompanyStatus.INACTIVE]: 'Inactive',
                    [CompanyStatus.PENDING]: 'Pending',
                  }[company.status]
                }
              </div>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Company name</p>
              <p className="font-bold leading-6">{company.title || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Country</p>
              <p className="font-bold leading-6">{company.country || 'N/A'}</p>
            </div>

            <div>
              <p className="text-blue-2 text-sm leading-5">Contact person name</p>
              <p className="font-bold leading-6">{company.contact_person || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Company website</p>
              <p className="font-bold leading-6">{company.website || 'N/A'}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Applications</p>
              <div className={cn('px-3 py-1.5 rounded text-sm font-medium leading-3.5 w-max text-white bg-blue-1')}>
                N/A
              </div>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Telephone number</p>
              <p className="font-bold leading-6">{company.phone_number || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">City</p>
              <p className="font-bold leading-6">{company.city || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Contact person position</p>
              <p className="font-bold leading-6">{company.contact_role || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Tax number</p>
              <p className="font-bold leading-6">{company.inn || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
      <ProfileForm open={openProfileEditForm} close={() => setOpenProfileEditForm(false)} company={company} />
      <OverviewForm open={openOverviewEditForm} close={() => setOpenOverviewEditForm(false)} company={company} />
    </section>
  )
}
