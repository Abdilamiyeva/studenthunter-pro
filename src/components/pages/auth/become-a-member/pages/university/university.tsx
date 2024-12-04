import {Breadcrumb, Button, Field} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useValidationOptions} from '@/hooks/use-validation-options'
import {useBecomeAMemberMutation} from '@/features/auth'
import {BecomeAMemberRequest} from '@/features/auth/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {formatBackToShortNumber} from '@/utils/format-phone-number'
import {Role} from '@/constants/roles'
import {SuccessScreen} from '../../components'

export const UniversityPage = () => {
  const [becomeAMember, {data, isLoading: isSigningUp}] = useBecomeAMemberMutation()
  const form = useForm<BecomeAMemberRequest>()
  const getValidationOptions = useValidationOptions()
  const handleRequest = useHandleRequest()

  const onSubmit: SubmitHandler<BecomeAMemberRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await becomeAMember({
          ...formData,
          phone_number: formatBackToShortNumber(formData.phone_number),
          role: Role.UNIVERSITY,
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
          {label: 'University'},
        ]}
        className="mb-10"
      />
      {data?.success ? (
        <SuccessScreen />
      ) : (
        <div className="w-[1000px] mx-auto">
          <h1 className="text-6xl font-bold leading-14.5 mb-7">University Details</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10">
              <div className="grid grid-cols-2 gap-x-20 gap-y-10">
                <Field
                  type="second-input"
                  name="title"
                  control={form.control}
                  componentProps={{
                    label: 'University name',
                    placeholder: 'Enter university name',
                    required: true,
                  }}
                />
                <Field
                  type="second-input"
                  name="email"
                  rules={getValidationOptions(true, 2, 100, {
                    validate: (email: string) =>
                      !(email.includes('@') && email.includes('.')) ? 'Please enter correct email' : undefined,
                  })}
                  control={form.control}
                  componentProps={{
                    label: 'Email',
                    placeholder: 'Enter email',
                    required: true,
                  }}
                />
                <Field
                  type="second-input"
                  name="contact_role"
                  control={form.control}
                  componentProps={{
                    label: 'Contact person position',
                    placeholder: 'Enter contact person position',
                    required: true,
                  }}
                />
                <Field
                  type="second-input"
                  name="contact_person"
                  control={form.control}
                  componentProps={{
                    label: 'Contact person name',
                    placeholder: 'Enter contact person name',
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
                    required: true,
                    options: [
                      {label: 'Uzbekistan', value: 'uz'},
                      {label: 'USA', value: 'us'},
                      {label: 'Russia', value: 'ru'},
                    ],
                  }}
                />
                <Field
                  type="second-input"
                  name="email"
                  control={form.control}
                  componentProps={{
                    label: 'Website',
                    placeholder: 'Enter Website',
                  }}
                />
                <Field
                  type="second-input"
                  name="city"
                  control={form.control}
                  componentProps={{
                    label: 'City',
                    placeholder: 'Select city',
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
