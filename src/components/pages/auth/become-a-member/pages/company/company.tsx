import {Breadcrumb, Button, Field} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useValidationOptions} from '@/hooks/use-validation-options'
import {useBecomeAMemberMutation} from '@/features/auth'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {BecomeAMemberRequest} from '@/features/auth/types'
import {Role} from '@/constants/roles'
import {formatBackToShortNumber} from '@/utils/format-phone-number'
import {SuccessScreen} from '../../components'
import {COUNTRIES, STATES} from '@/constants/countries'

export const CompanyPage = () => {
  const [becomeAMember, {isLoading: isSigningUp, data}] = useBecomeAMemberMutation()
  const form = useForm<BecomeAMemberRequest>()
  const getValidationOptions = useValidationOptions()
  const handleRequest = useHandleRequest()

  const onSubmit: SubmitHandler<BecomeAMemberRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await becomeAMember({
          ...formData,
          phone_number: formatBackToShortNumber(formData.phone_number),
          role: Role.COMPANY,
        })
        return result
      },
    })
  }

  return (
    <div className="container mt-8 mb-40">
      <Breadcrumb
        links={[
          {label: 'Home', path: '/'},
          {label: 'Become a member', path: '/auth/become-a-member'},
          {label: 'Company'},
        ]}
        className="mb-10"
      />
      {data?.success ? (
        <SuccessScreen />
      ) : (
        <div className="w-[1000px] mx-auto">
          <h1 className="text-6xl font-bold leading-14.5 mb-7">Company Details</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10">
              <div className="grid grid-cols-2 gap-x-20 gap-y-10">
                <Field
                  type="second-input"
                  name="companyName"
                  control={form.control}
                  componentProps={{
                    label: 'Company name',
                    placeholder: 'Enter company name',
                    required: true,
                  }}
                />
                <Field
                  type="second-input"
                  name="email"
                  control={form.control}
                  rules={getValidationOptions(true, 2, 100, {
                    validate: (email: string) =>
                      !(email.includes('@') && email.includes('.')) ? 'Please enter correct email' : undefined,
                  })}
                  componentProps={{
                    label: 'Email',
                    placeholder: 'Enter email',
                    required: true,
                  }}
                />
                <Field
                  type="second-input"
                  name="contactPersonName"
                  control={form.control}
                  componentProps={{
                    label: 'Contact person name',
                    placeholder: 'Enter contact person name',
                    required: true,
                  }}
                />
                <Field
                  type="second-input"
                  name="contactPersonPosition"
                  control={form.control}
                  componentProps={{
                    label: 'Contact person position',
                    placeholder: 'Enter contact person position',
                    required: true,
                  }}
                />
                <Field
                  type="second-input"
                  name="phone_number"
                  control={form.control}
                  componentProps={{
                    type: 'tel',
                    label: 'Phone',
                    placeholder: 'Enter phone number',
                    required: true,
                  }}
                />

                <Field
                  type="select"
                  name="country"
                  control={form.control}
                  componentProps={{
                    label: 'Country',
                    placeholder: 'Select country',
                    options: COUNTRIES.map(country => ({label: country.name, value: country.name})),
                  }}
                />
                <Field
                  type="second-input"
                  name="taxNumber"
                  control={form.control}
                  componentProps={{
                    label: 'Tax number',
                    placeholder: 'Enter tax number',
                  }}
                />
                <Field
                  type="select"
                  name="city"
                  control={form.control}
                  componentProps={{
                    label: 'City',
                    placeholder: 'Select city',
                    options: STATES.filter(state => form.watch('country') === state.country).map(state => ({
                      label: state.name,
                      value: state.name,
                    })),
                  }}
                />
              </div>
              <Button
                loading={isSigningUp}
                htmlType="submit"
                theme="orange"
                className="w-max ml-auto bg-orange-6 hover:bg-orange-6/90 duration-default border-orange-6 text-xl font-medium leading-7.5 px-16 py-4"
              >
                Send request
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  )
}
