import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {Form} from '@/components/ui/form'
import {Field, FormModal} from '@/components/common'
import {useUpdateCompanyMutation} from '@/features/company'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {UpdateConpanyRequestBody} from '@/features/company/types'

export const EditForm = ({open, close, company}: Props) => {
  const [updateCompany, {isLoading: isUpdating}] = useUpdateCompanyMutation()
  const form = useForm<UpdateConpanyRequestBody>({defaultValues: {description: company.description}})
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateConpanyRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
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
      loading={isUpdating}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <Field
        type="cv-builder-md-editor"
        name="description"
        control={form.control}
        componentProps={{
          id: 'create-company-description-editor',
          required: true,
        }}
      />
    </FormModal>
  )
}
