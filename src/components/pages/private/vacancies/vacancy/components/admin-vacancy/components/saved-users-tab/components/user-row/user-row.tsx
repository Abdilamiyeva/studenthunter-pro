import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar, DotsDropdown} from '@/components/common'
import {StatusBtn} from './components/status-btn'
import {EditIcon, TrashIcon} from '@/icons'
import {getImageURL} from '@/utils/get-image'
import {getCertificateScore} from '@/utils/get-certificate-score/get-certificate-score'

export const UserRow = ({index, applicant}: Props) => (
  <TableRow>
    <TableCell className="text-blue text-xs font-semibold leading-5 text-center">{index + 1}</TableCell>
    <TableCell className="flex justify-start">
      <div className="flex items-center gap-4">
        <Avatar
          className="w-10 h-10"
          fullName={`${applicant.applicant.first_name} ${applicant.applicant.last_name}`}
          src={getImageURL(applicant.applicant.image)}
        />
        <div>
          <p className="text-sm font-semibold text-blue">{applicant.applicant.first_name}</p>
          <p className="text-blue-2 text-xs font-normal">{applicant.applicant.last_name}</p>
        </div>
      </div>
    </TableCell>
    <TableCell className="text-center">
      <StatusBtn status={applicant.status} />
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-bold leading-5 text-center ">
      <span className="text-blue-9">{applicant.applicant.phone_number}</span>
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
      <p>{applicant.vacancy.country}</p>
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
      {getCertificateScore(applicant.applicant.certificates, 'IELTS')}
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
      {getCertificateScore(applicant.applicant.certificates, 'SAT')}
    </TableCell>
    <TableCell className="text-center px-5">
      <div className="grid place-content-center">
        <DotsDropdown
          buttons={[
            {
              label: 'Delete',
              icon: <TrashIcon className="w-3.5 h-3.5" />,
              className: 'text-orange hover:!text-orange hover:!bg-orange/10',
            },
            {
              label: 'Edit',
              icon: <EditIcon className="w-3.5 h-3.5" />,
              className: 'text-green hover:!text-green hover:!bg-green/10',
            },
          ]}
        />
      </div>
    </TableCell>
  </TableRow>
)
