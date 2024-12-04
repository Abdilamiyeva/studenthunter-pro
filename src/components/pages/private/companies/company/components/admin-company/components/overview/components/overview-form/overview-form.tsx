import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {UpdateConpanyRequestBody} from '@/features/company/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useUpdateCompanyMutation} from '@/features/company'
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {COUNTRIES, STATES} from '@/constants/countries'

export const OverviewForm = ({open, close, company}: Props) => {
  const [updateCompany, {isLoading: isUpdating}] = useUpdateCompanyMutation()
  const form = useForm<UpdateConpanyRequestBody>({
    defaultValues: {
      title: company.title,
      country: company.country,
      city: company.city,
      contact_person: company.contact_person,
      website: company.website,
      phone_number: company.phone_number,
      contact_role: company.contact_role,
      inn: company.inn,
    },
  })
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
        toast({title: 'Company informations successfully updated!'})
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
      <div className="grid grid-cols-2 gap-x-[25px] gap-y-10">
        <Field
          type="second-input"
          name="title"
          control={form.control}
          componentProps={{label: 'Company name', required: true, placeholder: 'Enter company name'}}
        />
        <Field
          type="second-input"
          name="phone_number"
          control={form.control}
          componentProps={{type: 'tel', label: 'Mobile number', required: true, placeholder: 'Enter mobile number'}}
        />
        <Field
          type="select"
          name="country"
          control={form.control}
          componentProps={{
            label: 'Country',
            required: true,
            placeholder: 'Select country',
            options: COUNTRIES.map(country => ({label: country.name, value: country.name})),
          }}
        />
        <Field
          type="select"
          name="city"
          control={form.control}
          componentProps={{
            label: 'City',
            required: true,
            placeholder: 'Select city',
            options: STATES.filter(state => form.watch('country') === state.country).map(state => ({
              label: state.name,
              value: state.name,
            })),
          }}
        />
        <Field
          type="second-input"
          name="contact_person"
          control={form.control}
          componentProps={{label: 'Contact person name', required: true, placeholder: 'Enter contact person name'}}
        />
        <Field
          type="second-input"
          name="contact_role"
          control={form.control}
          componentProps={{
            label: 'Contact person position',
            required: true,
            placeholder: 'Enter contact person position',
          }}
        />
        <Field
          type="second-input"
          name="website"
          control={form.control}
          componentProps={{label: 'Company website', placeholder: 'Enter company website'}}
        />
        <Field
          type="second-input"
          name="inn"
          control={form.control}
          componentProps={{label: 'Tax number', required: true, placeholder: 'Enter tax number'}}
        />
      </div>
    </FormModal>
  )
}
