import {Avatar, Button} from '@/components/common'
import {EditIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, TelegramIcon} from '@/icons'
import {Fragment, useMemo, useState} from 'react'
import {OverviewEditForm, ProfileEditForm} from './components'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'
import {UniversityStatus} from '@/constants/statusues'
import {cn} from '@/lib/utils'

export const Overview = ({university}: Props) => {
  const [profileEdit, setProfileEdit] = useState(false)
  const [overviewEdit, setOverviewEdit] = useState(false)
  const statusClassName = useMemo(() => {
    switch (university.status) {
      case UniversityStatus.ACTIVE:
        return 'bg-green'
      case UniversityStatus.ARCHIVED:
        return 'bg-orange'
      case UniversityStatus.PENDING:
        return 'bg-blue'
      default:
        return ''
    }
  }, [university.status])

  return (
    <section id="overview" className="section">
      <div className="flex flex-col md:flex-row justify-between gap-y-6 sm:gap-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-x-8 gap-y-3">
          <div className="w-32 h-32 rounded-full border border-blue overflow-hidden">
            <Avatar className="h-full" src={getImageURL(university.logo)} fullName={university.title} />
          </div>
          <div>
            <h1 className="text-blue text-xl font-semibold leading-8">{university.title}</h1>
            <div className="flex items-center gap-x-3 text-blue-1">
              <LocationIcon className="w-[14px] h-[14px]" />
              <span className="text-sm font-normal leading-5">{university.email}</span>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-between items-end">
          <div>
            <Button
              onClick={() => setProfileEdit(true)}
              className="rounded py-1.5 px-7 text-sm"
              icon={<EditIcon className="w-3 h-3" />}
            >
              Edit
            </Button>
          </div>
          <div className="flex gap-x-2">
            {university.socials?.telegram && (
              <a href={university.socials?.telegram} target="_blank" className="hover:text-sky duration-default">
                <TelegramIcon className="w-6 h-6" />
              </a>
            )}
            {university.socials?.instagram && (
              <a href={university.socials?.instagram} target="_blank" className="hover:text-sky duration-default">
                <InstagramIcon className="w-6 h-6" />
              </a>
            )}
            {university.socials?.linkedin && (
              <a href={university.socials?.linkedin} target="_blank" className="hover:text-sky duration-default">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            )}
            {university.socials?.facebook && (
              <a href={university.socials?.facebook} target="_blank" className="hover:text-sky duration-default">
                <FacebookIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 border border-blue-4 rounded-2xl py-3 px-5 sm:py-5 sm:px-8 ">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h2 className="text-blue text-xl font-bold leading-8 mb-2">Overview</h2>
          <Button
            onClick={() => setOverviewEdit(true)}
            className="rounded py-1.5 px-7 text-sm"
            icon={<EditIcon className="w-3 h-3" />}
          >
            Edit
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 mt-6 gap-x-10">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Contract</p>
              <div className={cn('w-max px-4 h-6 rounded text-white', statusClassName)}>
                {
                  {
                    [UniversityStatus.ACTIVE]: 'Active',
                    [UniversityStatus.ARCHIVED]: 'Archived',
                    [UniversityStatus.PENDING]: 'Pending',
                  }[university.status]
                }
              </div>
            </div>
            {university.title && (
              <div>
                <p className="text-blue-2 text-sm leading-5">University name</p>
                <p className="font-bold leading-6">{university.title}</p>
              </div>
            )}
            {university.country && (
              <div>
                <p className="text-blue-2 text-sm leading-5">Country</p>
                <p className="font-bold leading-6">{university.country}</p>
              </div>
            )}
            {university.contact_person && (
              <div>
                <p className="text-blue-2 text-sm leading-5">Contact person name</p>
                <p className="font-bold leading-6">{university.contact_person}</p>
              </div>
            )}
            <div>
              <p className="text-blue-2 text-sm leading-5">Programms</p>
              <p className="font-bold leading-6">{university.faculties?.length}</p>
            </div>
            {university.tuition_fee && (
              <div className="flex gap-x-12">
                <div className="flex flex-col">
                  <p className="text-blue-2 font-normal leading-5">Tution Fee</p>
                  <h3 className="text-base font-bold leading-6 text-blue flex items-center gap-x-2">
                    {university.tuition_fee}
                  </h3>
                </div>
              </div>
            )}
            <div>
              <p className="text-blue-2 text-sm leading-5">University vebsite</p>
              {!university.website ? (
                <a
                  href={university.website}
                  target="_blank"
                  className="text-blue-9 text-base font-bold underline leading-normal"
                >
                  {university.website}
                </a>
              ) : (
                <span className="font-medium">Not set</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Applications</p>
              <div
                className={cn(
                  'w-max text-center px-4 h-6 rounded text-white',
                  university.applicationsCount ? 'bg-green' : 'bg-orange',
                )}
              >
                {university.applicationsCount || 0}
              </div>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Study level</p>
              <div className="text-base font-bold leading-6 text-blue flex flex-wrap items-center gap-x-2">
                {university.study_level?.split(', ').map((studyLevel, index) => (
                  <Fragment key={studyLevel}>
                    {studyLevel}{' '}
                    {university?.study_level?.split(', ').length ||
                      (0 - 1 !== index && <div className="w-1 h-1 bg-blue" />)}
                  </Fragment>
                ))}
              </div>
            </div>
            {university.city && (
              <div>
                <p className="text-blue-2 text-sm leading-5">City</p>
                <p className="font-bold leading-6">{university.city}</p>
              </div>
            )}
            {university.contact_role && (
              <div>
                <p className="text-blue-2 text-sm leading-5">Contact person position</p>
                <p className="font-bold leading-6">{university.contact_role}</p>
              </div>
            )}
            <div className="flex flex-col">
              <p className="text-blue-2 font-normal leading-5">Rating</p>
              <h3 className="text-base font-bold leading-6 text-blue flex items-center gap-x-2">
                = {university.rating || 0}
              </h3>
            </div>
            {university.phone_number && (
              <div>
                <p className="text-blue-2 text-sm leading-5">Telephone number</p>
                <p className="font-bold leading-6">{university.phone_number}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <ProfileEditForm close={() => setProfileEdit(false)} open={profileEdit} university={university} />
      <OverviewEditForm close={() => setOverviewEdit(false)} open={overviewEdit} university={university} />
    </section>
  )
}
