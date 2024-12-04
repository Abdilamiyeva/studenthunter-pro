/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import {BoldTabs, FormModal} from '@/components/common'
import {Props} from './types'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {About, Overview, Profile} from './components'
import {CreateConsultingRequest} from '@/features/consulting/types'
import {useCreateConsultingMutation} from '@/features/consulting/consulting'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useUploadFiles} from '@/hooks/use-upload-files'
import {useEffect} from 'react'
import {useValidationOptions} from '@/hooks/use-validation-options'
import {formatBackToShortNumber} from '@/utils/format-phone-number'

export const CreateForm = ({close, open}: Props) => {
  const [createConsulting, {isLoading: isCreating}] = useCreateConsultingMutation()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const form = useForm<CreateConsultingRequest>()
  const handleRequest = useHandleRequest()
  const getValidationOptions = useValidationOptions()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<CreateConsultingRequest> = async formData => {
    await handleRequest({
      request: async () => {
        formData.logo = (await uploadFiles([formData.logo as any]))[0]
        formData.phone_number = formatBackToShortNumber(formData.phone_number)
        const result = await createConsulting(formData)
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Consulting successfully created!'})
      },
    })
  }

  useEffect(() => {
    if (open) {
      form.register('title', getValidationOptions(true))
      form.register('phone_number', getValidationOptions(true))
      form.register('contact_person', getValidationOptions(true))
      form.register('contact_role', getValidationOptions(true))
      form.register('email', getValidationOptions(true))
      form.register('password', getValidationOptions(true))
      form.register('services_fee', getValidationOptions(true))
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open])

  return (
    <FormModal
      close={close}
      open={open}
      loading={isUploadingFiles || isCreating}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <BoldTabs
        tabs={[
          {
            label: 'Profile',
            children: <Profile form={form} />,
          },
          {
            label: 'Overview',
            children: <Overview form={form} />,
          },
          {
            label: 'About',
            children: <About form={form} />,
          },
        ]}
      />
    </FormModal>
  )
}
