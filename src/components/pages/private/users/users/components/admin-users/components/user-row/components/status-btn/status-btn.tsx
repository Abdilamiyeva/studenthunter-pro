import {useMemo} from 'react'
import {Props} from './types'
import {cn} from '@/lib/utils'
import {AcceptedUserIcon, Edit2Icon, RejectedUserIcon} from '@/icons'
import {Dropdown} from '@/components/common'
import {useChangeApplicantStatusMutation} from '@/features/applicant/applicant'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {ApplicantStatus} from '@/constants/statusues'
import {useToast} from '@/components/ui/use-toast'

export const StatusBtn = ({status, applicantID}: Props) => {
  const [changeStatus, {isLoading: isChangingStatus}] = useChangeApplicantStatusMutation()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()
  const themeClassName = useMemo(() => {
    switch (status) {
      case 0:
        return 'bg-orange-6'
      case 1:
        return 'bg-green'
      case 2:
        return 'bg-orange-6'
    }
  }, [status])

  const onChangeStatus = async (updatedStatus: ApplicantStatus) => {
    await handleRequest({
      request: async () => {
        const result = await changeStatus({
          applicantID,
          params: {status: updatedStatus},
        })
        return result
      },
      onSuccess: () => {
        toast({title: 'Applicant status successfully changed!'})
      },
    })
  }

  return (
    <div
      className={cn(
        'relative text-sm font-semibold text-white leading-5 px-4 py-1 rounded-sm w-max mx-auto',
        themeClassName,
      )}
    >
      {
        {
          0: 'Inactive',
          1: 'Active',
          2: 'Pending',
        }[status]
      }
      <Dropdown
        className="px-2 py-2 w-28 rounded-lg"
        buttonClassName="text-xs"
        buttons={[
          {
            ...(ApplicantStatus.ACTIVE === status
              ? {
                  label: 'Disactivate',
                  onClick: () => onChangeStatus(ApplicantStatus.INACTIVE),
                  icon: <RejectedUserIcon className="w-3.5 h-3.5" />,
                  className: 'text-orange hover:!text-orange hover:!bg-orange/10',
                  loaderClassName: 'border-orange',
                }
              : {
                  label: 'Activate',
                  onClick: () => onChangeStatus(ApplicantStatus.ACTIVE),
                  icon: <AcceptedUserIcon className="w-3.5 h-3.5" />,
                  className: 'text-green hover:!text-green hover:!bg-green/10',
                  loaderClassName: 'border-green',
                }),
            loading: isChangingStatus,
          },
        ]}
      >
        <button className="absolute -top-2 -right-2 w-4 h-4 bg-white text-blue-1 border border-blue-1 rounded-full grid place-content-center">
          <Edit2Icon className="w-2 h-2" />
        </button>
      </Dropdown>
    </div>
  )
}
