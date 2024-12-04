import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar, DotsDropdown} from '@/components/common'
import {MailIcon, UserAvatar} from '@/icons'
import {StatusBtn} from './components'
import {getImageURL} from '@/utils/get-image'
import {getCertificateScore} from '@/utils/get-certificate-score/get-certificate-score'
import {useNavigate} from 'react-router-dom'

export const UserRow = ({index, user}: Props) => {
  const navigate = useNavigate()

  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4">{index + 1}</TableCell>
      <TableCell className="flex items-center gap-4 pl-4">
        <Avatar
          className="w-10 h-10 max-w-[40px] max-h-[40px] min-w-[40px]"
          imageClassName="w-10 h-10"
          fullName={`${user.applicant.first_name} ${user.applicant.last_name}`}
          src={getImageURL(user.applicant.image)}
        />
        <div>
          <p className="text-sm font-semibold text-blue">{user.applicant.first_name}</p>
          <p className="text-blue-2 text-xs font-normal">{user.applicant.last_name}</p>
        </div>
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 pl-8">{user.program}</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">{user.last_school_gpa}</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        {getCertificateScore(user.applicant.certificates_data, 'IELTS')}
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        {getCertificateScore(user.applicant.certificates_data, 'SAT')}
      </TableCell>
      <TableCell className="text-center">
        <StatusBtn status={user.university_status} />
      </TableCell>
      <TableCell className="text-right px-5">
        <div className="grid place-content-center">
          <DotsDropdown
            buttons={[
              {
                label: 'Profile',
                icon: <UserAvatar className="w-5 h-5" />,
                onClick: () => navigate(`/dashboard/users/${user._id}`),
              },
              {
                label: 'Message',
                icon: <MailIcon className="w-4 h-4 text-green" />,
                className: 'text-green hover:!text-green hover:!bg-green/10',
                onClick: () => navigate(`/dashboard/chat?tab=user&id=${user._id}`),
              },
            ]}
          />
        </div>
      </TableCell>
    </TableRow>
  )
}
