import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar} from '@/components/common'
import {getCertificateScore} from '@/utils/get-certificate-score/get-certificate-score'
import {useMemo} from 'react'
import {UserStatus} from '@/constants/statusues'
import {cn} from '@/lib/utils'

export const UserRow = ({index, user}: Props) => {
  const statusClassName = useMemo(() => {
    switch (user.status) {
      case UserStatus.ACTIVE:
        return 'bg-green'
      case UserStatus.INACTIVE:
        return 'bg-orange'
      default:
        return 'bg-blue'
    }
  }, [user.status])

  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4">{index + 1}</TableCell>
      <TableCell className="flex items-center gap-4 pl-4">
        <Avatar
          className="w-10 h-10 min-w-[40px]"
          imageClassName="w-10 h-10"
          fullName={`${user.first_name} ${user.last_name}`}
          src={user.image}
        />
        <div>
          <p className="text-sm font-semibold text-blue">{user.first_name}</p>
          <p className="text-blue-2 text-xs font-normal">{user.last_name}</p>
        </div>
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 pl-8">
        {user.applicant_student_id?.last_school_name || 'N/A'}
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        {user.applicant_student_id?.last_school_gpa || 'N/A'}
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        {getCertificateScore(user.certificates, 'IELTS')}
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        {getCertificateScore(user.certificates, 'SAT')}
      </TableCell>
      <TableCell className="text-center">
        <span className={cn('text-white px-3 py-0.5 text-sm font-medium leading-5 rounded', statusClassName)}>
          {
            {
              [UserStatus.ACTIVE]: 'Active',
              [UserStatus.INACTIVE]: 'Inactive',
            }[user.status]
          }
        </span>
      </TableCell>
    </TableRow>
  )
}
