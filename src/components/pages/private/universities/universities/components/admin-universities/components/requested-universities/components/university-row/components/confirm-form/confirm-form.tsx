import {useConfirmMemeberMutation} from '@/features/auth'
import {Props} from './types'
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {SubmitHandler, useForm} from 'react-hook-form'
import {ConfirmMemberRequest} from '@/features/auth/types'
import {Role} from '@/constants/roles'
import {useToast} from '@/components/ui/use-toast'

export const ConfirmForm = ({open, close, memberID}: Props) => {
  const [confirmMember, {isLoading: isConfirming}] = useConfirmMemeberMutation()
  const form = useForm<ConfirmMemberRequest>()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<ConfirmMemberRequest> = async formData => {
    await handleRequest({
      request: async () => {
        formData.member_id = memberID
        formData.role = Role.UNIVERSITY
        const result = await confirmMember(formData)
        return result
      },
      onSuccess: () => {
        toast({
          title: 'University member successfully confirmed!',
        })
        close()
      },
    })
  }

  return (
    <FormModal
      open={open}
      close={close}
      loading={isConfirming}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <div>
        <h4 className="text-xl font-bold leading-7.5 mb-5">Create a password</h4>
        <Field
          type="second-input"
          name="password"
          control={form.control}
          componentProps={{
            type: 'password',
            label: 'Password',
            placeholder: 'Enter password...',
            required: true,
          }}
        />
        <span className="text-blue-1 mt-2 leading-5.5 text-sm">You can always change it later</span>
      </div>
    </FormModal>
  )
}
