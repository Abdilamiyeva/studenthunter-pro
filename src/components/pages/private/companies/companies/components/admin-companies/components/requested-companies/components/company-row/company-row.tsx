import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar, Button, TableEmptyRow} from '@/components/common'
import {CheckIcon, XIcon} from '@/icons'
import {Link} from 'react-router-dom'
import {getImageURL} from '@/utils/get-image'
import {useState} from 'react'
import {ConfirmForm} from './components'
import {useRejectMemberMutation} from '@/features/auth'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {Role} from '@/constants/roles'

export const CompanyRow = ({index, company}: Props) => {
  const [rejectMember, {isLoading: isRejecting}] = useRejectMemberMutation()
  const [openConfirmForm, setOpenConfirmFrom] = useState(false)
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onReject = async () => {
    await handleRequest({
      request: async () => {
        const result = await rejectMember({
          member_id: company._id,
          role: Role.COMPANY,
        })

        return result
      },
      onSuccess: () => {
        toast({
          title: 'Company successfully rejected!',
        })
      },
    })
  }

  return (
    <TableRow>
      <TableCell className="text-center text-xs font-semibold leading-5">{index + 1}</TableCell>
      <TableCell>
        <Link to={`/dashboard/companies/${company._id}`} className="group">
          <div className="flex items-center gap-x-4">
            <Avatar src={getImageURL(company.logo)} fullName={company.title} />
            <h6 className="text-sm font-semibold leading-5 group-hover:text-sky-1 duration-default">{company.title}</h6>
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-center">
        {company.phone_number ? (
          <a target="_blank" href={`tel:${company.phone_number}`} className="text-sky-1 text-sm font-medium leading-5">
            {company.phone_number}
          </a>
        ) : (
          <TableEmptyRow />
        )}
      </TableCell>
      <TableCell className="text-center">{company.inn || <TableEmptyRow />}</TableCell>
      <TableCell>
        <Button
          onClick={() => setOpenConfirmFrom(true)}
          icon={<CheckIcon className="w-3 h-3" />}
          className="text-sm font-bold leading-5 px-3 py-2 rounded w-max mx-auto"
        >
          Confirm
        </Button>
        <ConfirmForm open={openConfirmForm} close={() => setOpenConfirmFrom(false)} memberID={company._id} />
      </TableCell>
      <TableCell>
        <Button
          onClick={onReject}
          loading={isRejecting}
          icon={<XIcon className="w-3 h-3" />}
          theme="orange"
          className="text-sm font-bold leading-5 px-3 py-2 rounded w-max mx-auto"
        >
          Reject
        </Button>
      </TableCell>
    </TableRow>
  )
}
