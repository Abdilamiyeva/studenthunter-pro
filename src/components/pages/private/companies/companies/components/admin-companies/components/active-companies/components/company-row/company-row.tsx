import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Link, useNavigate} from 'react-router-dom'
import {Avatar, DotsDropdown} from '@/components/common'
import {useMemo} from 'react'
import {cn} from '@/lib/utils'
import {MailIcon, TrashIcon} from '@/icons'
import {getImageURL} from '@/utils/get-image'
import {CompanyStatus} from '@/constants/statusues'
import {useDeleteCompanyMutation} from '@/features/company'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const CompanyRow = ({index, company}: Props) => {
  const [deleteCompany, {isLoading: isDeleting}] = useDeleteCompanyMutation()
  const handleRequest = useHandleRequest()
  const navigate = useNavigate()
  const {toast} = useToast()
  const themeClassNames = useMemo(() => {
    switch (company.status) {
      case CompanyStatus.INACTIVE:
        return 'bg-orange'
      case CompanyStatus.ACTIVE:
        return 'bg-green'
      case CompanyStatus.PENDING:
        return 'bg-blue-2'
    }
  }, [company.status])

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteCompany({companyID: company._id})
        return result
      },
      onSuccess: () => {
        toast({title: 'Company successfully deleted!'})
      },
    })
  }

  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4 text-center">{index + 1}</TableCell>
      <TableCell className="text-left">
        <Link to={`/dashboard/companies/${company._id}`} className="group">
          <div className="flex items-center gap-x-4">
            <Avatar src={getImageURL(company.logo)} fullName={company.title} />
            <h6 className="text-sm font-semibold leading-5 group-hover:text-sky-1 duration-default">{company.title}</h6>
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-center text-sm font-medium leading-7">
        <div
          className={cn('px-3 py-0.5 rounded text-white text-sm font-medium leading-5 w-max mx-auto', themeClassNames)}
        >
          {
            {
              [CompanyStatus.INACTIVE]: 'Inactive',
              [CompanyStatus.ACTIVE]: 'Active',
              [CompanyStatus.PENDING]: 'Pending',
            }[company.status]
          }
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div className="min-w-[74px] w-max text-center mx-auto py-1 rounded text-sm font-bold leading-5 bg-blue-1 text-white">
          N/A
        </div>
      </TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">
        {company.phone_number ? (
          <a target="_blank" href={`tel:${company.phone_number}`} className="text-sky-1 text-sm font-medium leading-5">
            {company.phone_number}
          </a>
        ) : (
          'N/A'
        )}
      </TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">{company.inn || 'N/A'}</TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">
        <div className="grid place-content-center">
          <DotsDropdown
            buttons={[
              {
                label: 'Message',
                icon: <MailIcon className="w-3.5 h-3.5" />,
                className: 'text-green hover:!text-green hover:!bg-green/10',
                onClick: () => navigate(`/dashboard/chat?tab=user&id=${company._id}`),
              },
              {
                label: 'Delete',
                icon: <TrashIcon className="w-3.5 h-3.5" />,
                className: 'text-orange hover:!text-orange hover:!bg-orange/10',
                loaderClassName: 'border-orange',
                onClick: onDelete,
                loading: isDeleting,
              },
            ]}
          />
        </div>
      </TableCell>
    </TableRow>
  )
}
