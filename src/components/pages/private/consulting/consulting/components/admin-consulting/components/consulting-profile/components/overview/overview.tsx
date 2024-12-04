import {Avatar, Button} from '@/components/common'
import {EditIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from '@/icons'
import {useState} from 'react'
import {OverViewEditForm, ProfileEditForm} from './components'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const Overview = ({consulting}: Props) => {
  const [profile, setProfile] = useState(false)
  const [overview, setOverview] = useState(false)

  return (
    <section id="overview" className="section">
      <div className="flex flex-col sm:flex-row justify-between gap-y-2">
        <div className="flex flex-col sm:flex-row items-center gap-x-7 gap-y-3">
          <Avatar
            src={getImageURL(consulting.logo)}
            fullName={consulting.title}
            imageClassName="w-[120px] h-[120px] rounded-full"
          />
          <div>
            <p className="text-xl font-semibold leading-7.5 mb-0.5">{consulting.title}</p>
            <div className="bg-green text-white text-sm font-medium leading-5 px-3 py-0.5 rounded w-max">
              {consulting.partners_count || 0} colleges
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between gap-y-2">
          <Button
            onClick={() => setProfile(true)}
            icon={<EditIcon className="w-3 h-3" />}
            className="w-full sm:w-auto px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
          >
            Edit
          </Button>
          <div className="flex gap-2">
            {consulting.socials?.telegram && (
              <a target="_blank" href={consulting.socials?.telegram}>
                <TelegramIcon className="w-6 h-6" />
              </a>
            )}
            {consulting.socials?.instagram && (
              <a target="_blank" href={consulting.socials?.instagram}>
                <InstagramIcon className="w-6 h-6" />
              </a>
            )}
            {consulting.socials?.linkedin && (
              <a target="_blank" href={consulting.socials?.linkedin}>
                <LinkedinIcon className="w-6 h-6" />
              </a>
            )}
            {consulting.socials?.facebook && (
              <a target="_blank" href={consulting.socials?.facebook}>
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
            icon={<EditIcon className="w-3 h-3" />}
            className="w-full sm:w-auto px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
            onClick={() => setOverview(true)}
          >
            Edit
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Consulting name</p>
              <p className="font-bold leading-6">{consulting.title}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Telephone number</p>
              <p className="font-bold leading-6">{consulting.phone_number}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Contact person name</p>
              <p className="font-bold leading-6">{consulting.contact_person}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Contact person position</p>
              <p className="font-bold leading-6">{consulting.contact_role}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Consulting email</p>
              <p className="font-bold leading-6">{consulting.email}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Consulting website</p>
              <p className="font-bold leading-6">{consulting.website}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Cost of service</p>
              <p className="font-bold leading-6">${consulting.services_fee}</p>
            </div>
          </div>
        </div>
      </div>
      <OverViewEditForm open={overview} close={() => setOverview(false)} consulting={consulting} />
      <ProfileEditForm open={profile} close={() => setProfile(false)} consulting={consulting} />
    </section>
  )
}
