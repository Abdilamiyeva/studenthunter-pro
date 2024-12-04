import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {useUpdateCompanyMutation} from '@/features/company'
import {UpdateConpanyRequestBody} from '@/features/company/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useUploadFiles} from '@/hooks/use-upload-files'

export const ProfileForm = ({open, close, company}: Props) => {
  const [updateCompany, {isLoading: isUpdating}] = useUpdateCompanyMutation()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const form = useForm<UpdateConpanyRequestBody>({
    defaultValues: {
      logo: company.logo,
      telegram: company.socials?.telegram,
      instagram: company.socials?.instagram,
      linkedin: company.socials?.linkedin,
      facebook: company.socials?.facebook,
    },
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateConpanyRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        formData.logo = (await uploadFiles([formData.logo as any]))[0]

        const result = await updateCompany({companyID: company._id, body: formData})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Company profile successfully updated!'})
      },
    })
  }

  return (
    <FormModal
      open={open}
      close={close}
      loading={isUploadingFiles || isUpdating}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <div>
        <Field type="single-image-upload" name="logo" control={form.control} />
        <div className="mt-10">
          <h5 className="text-xl font-bold leading-7.5 mb-7">Social profiles</h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            <Field
              type="second-input"
              name="telegram"
              control={form.control}
              componentProps={{
                label: 'Telegram',
              }}
            />
            <Field
              type="second-input"
              name="instagram"
              control={form.control}
              componentProps={{
                label: 'Instagram',
              }}
            />
            <Field
              type="second-input"
              name="linkedin"
              control={form.control}
              componentProps={{
                label: 'LinkedIn',
              }}
            />
            <Field
              type="second-input"
              name="facebook"
              control={form.control}
              componentProps={{
                label: 'Facebook',
              }}
            />
          </div>
        </div>
      </div>
    </FormModal>
  )
}
