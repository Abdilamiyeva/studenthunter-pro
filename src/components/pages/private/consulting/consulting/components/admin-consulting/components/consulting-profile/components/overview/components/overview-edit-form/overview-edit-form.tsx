/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {Props} from './types'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useUpdateConsultingMutation} from '@/features/consulting/consulting'
import {UpdateConsultingRequestBody} from '@/features/consulting/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {formatBackToShortNumber} from '@/utils/format-phone-number'

export const OverViewEditForm = ({close, open, consulting}: Props) => {
  const [updateConsulting, {isLoading: isUpdating}] = useUpdateConsultingMutation()
  const form = useForm<UpdateConsultingRequestBody>({
    defaultValues: {
      title: consulting.title,
      phone_number: consulting.phone_number,
      contact_person: consulting.contact_person,
      contact_role: consulting.contact_role,
      services_fee: consulting.services_fee,
      website: consulting.website,
      email: consulting.email,
    },
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateConsultingRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        formData.phone_number = formatBackToShortNumber(formData.phone_number || '')
        const result = await updateConsulting({consultingID: consulting._id, body: formData})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Consulting successfully updated!'})
      },
    })
  }

  return (
    <FormModal
      className="min-w-[785px]"
      open={open}
      close={close}
      loading={isUpdating}
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>{content}</Form>
        </form>
      )}
    >
      <h2 className="text-blue text-xl font-bold leading-7 mb-7">Overview</h2>
      <div className="grid gap-x-6 gap-y-10 grid-cols-2">
        <Field
          control={form.control}
          name="title"
          type="second-input"
          componentProps={{label: 'Consulting name', required: true}}
        />
        <Field
          control={form.control}
          name="phone_number"
          type="second-input"
          componentProps={{type: 'tel', label: 'Telephone number', required: true}}
        />
        <Field
          name="contact_person"
          control={form.control}
          type="second-input"
          componentProps={{label: 'Contact person name', required: true, placeholder: "Enter consulter's name"}}
        />
        <Field
          name="contact_role"
          control={form.control}
          type="second-input"
          componentProps={{label: 'Contact person position', required: true, placeholder: "Enter consulter's position"}}
        />
        <Field
          name="services_fee"
          control={form.control}
          type="second-input"
          componentProps={{
            type: 'number',
            label: 'Cost of service (USD)',
            required: true,
            placeholder: 'Enter consulting fee',
          }}
        />
        <Field
          name="website"
          control={form.control}
          type="second-input"
          componentProps={{label: 'Consulting website', required: true, placeholder: 'Enter consulting website'}}
        />
        <Field
          name="email"
          control={form.control}
          type="second-input"
          componentProps={{label: 'Company email', required: true, placeholder: 'Enter company email'}}
        />
      </div>
    </FormModal>
  )
}
