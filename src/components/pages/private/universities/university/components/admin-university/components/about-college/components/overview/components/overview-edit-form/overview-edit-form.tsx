/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {Form} from '@/components/ui/form'
import {useValidationOptions} from '@/hooks/use-validation-options'
import {STUDY_LEVELS} from '@/constants/study-levels'
import {COUNTRIES, STATES} from '@/constants/countries'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {UpdateUniversityRequestBody} from '@/features/university/types'
import {useUpdateUniversityMutation} from '@/features/university'
import {useToast} from '@/components/ui/use-toast'

export const OverviewEditForm = ({close, open, university}: Props) => {
  const [updateUniversity, {isLoading: isUpdating}] = useUpdateUniversityMutation()
  const form = useForm<UpdateUniversityRequestBody>({
    defaultValues: university,
  })
  const getValidationOptions = useValidationOptions()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateUniversityRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await updateUniversity({
          universityID: university._id,
          body: formData,
        })

        return result
      },
      onSuccess: () => {
        toast({
          title: 'University successfully updated!',
        })
      },
    })
  }

  return (
    <FormModal
      open={open}
      close={close}
      loading={isUpdating}
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>{content}</Form>
        </form>
      )}
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-10">
        <Field
          name="title"
          componentProps={{
            label: 'University name',
            placeholder: 'Hult International Univer...',
            required: true,
          }}
          control={form.control}
          type="second-input"
          rules={getValidationOptions(true)}
        />
        <Field
          name="study_level"
          componentProps={{
            label: 'Study level',
            placeholder: 'Beginner',
            required: true,
            options: STUDY_LEVELS,
          }}
          control={form.control}
          type="checkboxes-dropdown"
          rules={getValidationOptions(true)}
        />
        <Field
          name="country"
          componentProps={{
            label: 'Country',
            placeholder: 'Uzbekistan',
            required: true,
            options: COUNTRIES.map(country => ({label: country.name, value: country.name})),
          }}
          control={form.control}
          type="select"
          rules={getValidationOptions(true)}
        />
        <Field
          name="city"
          componentProps={{
            label: 'City',
            placeholder: 'Termiz',
            required: true,
            options: STATES.filter(state => form.watch('country') === state.country).map(state => ({
              label: state.name,
              value: state.name,
            })),
          }}
          control={form.control}
          type="select"
          rules={getValidationOptions(true)}
        />
        <Field
          name="contact_person"
          componentProps={{
            label: 'Contact person name',
            placeholder: 'Contact person',
          }}
          control={form.control}
          type="second-input"
          rules={getValidationOptions(true)}
        />
        <Field
          name="contact_role"
          componentProps={{
            label: 'Contact person position',
            placeholder: 'Contact person position',
          }}
          control={form.control}
          type="second-input"
          rules={getValidationOptions(true)}
        />
        <Field
          name="programs_count"
          componentProps={{
            label: 'Programs',
            placeholder: 'Programs',
            required: true,
          }}
          control={form.control}
          type="second-input"
          rules={getValidationOptions(true)}
        />
        <Field
          name="rating"
          componentProps={{
            label: 'Rating',
            placeholder: "Enter University's Rating",
            required: true,
          }}
          control={form.control}
          type="second-input"
          rules={getValidationOptions(true)}
        />
        <Field
          name="tuition_fee"
          componentProps={{
            label: 'Tution fee is US Dollars',
            placeholder: 'Tution fee',
            required: true,
          }}
          control={form.control}
          type="second-input"
          rules={getValidationOptions(true)}
        />
        <Field
          name="phone_number"
          componentProps={{
            type: 'tel',
            label: 'Telephone number',
            required: true,
          }}
          control={form.control}
          type="second-input"
          rules={getValidationOptions(true)}
        />
        <Field
          name="email"
          componentProps={{
            label: 'University email',
            placeholder: 'University email',
            required: true,
          }}
          control={form.control}
          type="second-input"
          rules={getValidationOptions(true)}
        />
        <Field
          name="password"
          componentProps={{
            type: 'password',
            label: 'Password',
            placeholder: '******',
          }}
          control={form.control}
          type="second-input"
        />
      </div>
    </FormModal>
  )
}
