/* eslint-disable react-hooks/exhaustive-deps */
import {BoldTabs, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './type'
import {About, Overview, Profile} from './components'
import {CreateCompanyRequest} from '@/features/company/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useCreateCompanyMutation} from '@/features/company'
import {useEffect} from 'react'
import {useValidationOptions} from '@/hooks/use-validation-options'

export const CreateForm = ({open, close}: Props) => {
  const [createCompany, {isLoading: isCreating}] = useCreateCompanyMutation()
  const form = useForm<CreateCompanyRequest>()
  const handleRequest = useHandleRequest()
  const getValidationOptions = useValidationOptions()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<CreateCompanyRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await createCompany(formData)
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Company successfully created!'})
      },
    })
  }

  useEffect(() => {
    if (open) {
      form.register('title', getValidationOptions(true))
      form.register('phone_number', getValidationOptions(true))
      form.register('country', getValidationOptions(true))
      form.register('city', getValidationOptions(true))
      form.register('contact_person', getValidationOptions(true))
      form.register('contact_role', getValidationOptions(true))
      form.register('inn', getValidationOptions(true))
      form.register('email', getValidationOptions(true))
      form.register('password', getValidationOptions(true))
      form.register('description', getValidationOptions(true))
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open])

  return (
    <FormModal
      open={open}
      close={close}
      loading={isCreating}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <BoldTabs
        tabs={[
          {label: 'Profile', children: <Profile form={form} />},
          {label: 'Overview', children: <Overview form={form} />},
          {label: 'About', children: <About form={form} />},
        ]}
      />
    </FormModal>
  )
}
