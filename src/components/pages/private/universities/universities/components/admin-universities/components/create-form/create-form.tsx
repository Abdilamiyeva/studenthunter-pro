/* eslint-disable no-console */
import {BoldTabs, FormModal} from '@/components/common'
import {Props} from './types'
import {Overview} from './components/overview'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Form} from '@/components/ui/form'
import {About} from './components/about'
import {Media} from './components/media'
import {Profile} from './components/profile'
import {ReactNode} from 'react'
import {useCreateUniversityMutation} from '@/features/university'
import {CreateUniversityRequest} from '@/features/university/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {formatBackToShortNumber} from '@/utils/format-phone-number'
import {useUploadFiles} from '@/hooks/use-upload-files'

export const CreateForm = ({close, open}: Props) => {
  const [createUniversity, {isLoading: isCreating}] = useCreateUniversityMutation()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const form = useForm<CreateUniversityRequest>()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<CreateUniversityRequest> = async formData => {
    await handleRequest({
      request: async () => {
        formData.phone_number = formatBackToShortNumber(formData.phone_number)
        formData.logo = (await uploadFiles([(formData as any).logo]))[0]
        formData.media = await uploadFiles((formData as any).media)
        const result = await createUniversity(formData)
        return result
      },
      onSuccess: () => {
        toast({
          title: 'University successfully created',
        })
        close()
      },
    })
  }

  return (
    <FormModal
      className="min-w-[850px]"
      close={close}
      open={open}
      loading={isCreating || isUploadingFiles}
      wrapForm={(content: ReactNode) => (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>{content}</Form>
        </form>
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
          {
            label: 'Media',
            children: <Media form={form} />,
          },
        ]}
      />
    </FormModal>
  )
}
