import {Avatar, Button, NotSetted} from '@/components/common'
import {FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, TelegramIcon} from '@/icons'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'
import {StatusBtn} from '@/components/pages/private/users/users/components/admin-users/components/user-row/components'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import {getCertificateScore} from '@/utils/get-certificate-score/get-certificate-score'

export const PersonalInfo = ({user}: Props) => {
  const ieltsScore = getCertificateScore(user.certificates, 'IELTS')
  const gpaScore = getCertificateScore(user.certificates, 'GPA')

  return (
    <section id="personal-info" className="section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-7">
          <Avatar
            src={getImageURL(user.image)}
            fullName={`${user.first_name} ${user.last_name}`}
            className="w-[120px] h-[120px] rounded-full border border-blue"
          />
          <div className="flex flex-col w-full sm:w-auto">
            <h4 className="text-xl font-semibold leading-7.5">
              {user.first_name} {user.last_name}
            </h4>
            <p className="text-blue-1 text-sm leading-5">{user.phone_number}</p>
            <div className="flex justify-start gap-5 mt-4">
              <StatusBtn status={user.status} applicantID={user._id} />
              <Link to={`/dashboard/chat?tab=user&id=${user._id}`}>
                <Button
                  variant="outline"
                  icon={<MailIcon className="w-4 h-4" />}
                  className="bg-blue-5 px-2 py-0.5 text-sm font-medium leading-5 rounded"
                >
                  &nbsp;Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {user.social?.telegram && (
            <a href={user.social.telegram} target="_blank">
              <TelegramIcon className="w-6 h-6" />
            </a>
          )}
          {user.social?.instagram && (
            <a href={user.social.instagram} target="_blank">
              <InstagramIcon className="w-6 h-6" />
            </a>
          )}
          {user.social?.linkedin && (
            <a href={user.social.linkedin} target="_blank">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          )}
          {user.social?.facebook && (
            <a href={user.social.facebook} target="_blank">
              <FacebookIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
      <div className="mt-5 border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
        <h5 className="text-xl font-bold leading-7.5 mb-4 sm:mb-7">Personal info</h5>
        <div className="grid sm:grid-cols-2 gap-y-6">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">First name</p>
              <p className="font-bold leading-6 break-all">{user.first_name}</p>
            </div>

            <div>
              <p className="text-blue-2 text-sm leading-5">Date of birth</p>
              {user.date_of_birth ? (
                <p className="font-bold leading-6 break-all">{dayjs(user.date_of_birth).format('DD.MM.YYYY')}</p>
              ) : (
                <NotSetted />
              )}
            </div>

            <div>
              <p className="text-blue-2 text-sm leading-5">Mobile number</p>
              {user.phone_number ? <p className="font-bold leading-6 break-all">{user.phone_number}</p> : <NotSetted />}
            </div>

            <div>
              <p className="text-blue-2 text-sm leading-5">IELTS Score</p>
              {ieltsScore ? <p className="font-bold leading-6 break-all">{ieltsScore}</p> : <NotSetted />}
            </div>

            <div>
              <p className="text-blue-2 text-sm leading-5">City</p>
              <p className="font-bold leading-6 break-all">{user.applicant_student_id?.city || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Street address</p>
              <p className="font-bold leading-6 break-all">{user.applicant_student_id?.address || 'N/A'}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Last name</p>
              <p className="font-bold leading-6 break-all">{user.last_name || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Gender</p>
              <p className="font-bold leading-6 break-all">{user.gender || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Emergency contact (parents)</p>
              <p className="font-bold leading-6 break-all">{user.applicant_student_id?.emergency_contact || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">GPA</p>
              <p className="font-bold leading-6 break-all">{gpaScore}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Country</p>
              <p className="font-bold leading-6 break-all">{user.applicant_student_id?.country || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Zipcode</p>
              <p className="font-bold leading-6 break-all">{user.applicant_student_id?.zip_code || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
