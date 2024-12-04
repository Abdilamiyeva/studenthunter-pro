/* eslint-disable react-hooks/exhaustive-deps */
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {useLazyGetAdminDashboardUniversitiesQuery} from '@/features/university'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {UniversityStatus} from '@/constants/statusues'
import {PER_PAGE} from '@/constants/pagination'
import {useToast} from '@/components/ui/use-toast'
import {UpdateHomeUniversitiesRequest} from '@/features/home-edit/types'
import {useUpdateHomeUniversitiesMutation} from '@/features/home-edit'
import {useEffect} from 'react'

export const UpdateForm = ({open, close, universities: selectedUniversities}: Props) => {
  const [updateUniversities, {isLoading}] = useUpdateHomeUniversitiesMutation()
  const [getUniversities, {data: {data: universities = []} = {}, isFetching}] =
    useLazyGetAdminDashboardUniversitiesQuery()
  const form = useForm<UpdateHomeUniversitiesRequest>({
    defaultValues: {
      universities: selectedUniversities.map(university => university._id),
    },
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const fetchUniversities = async (search: string) => {
    await handleRequest({
      request: async () => {
        const result = await getUniversities({
          search,
          perPage: PER_PAGE,
          status: UniversityStatus.ACTIVE,
        })

        return result
      },
    })
  }

  const onSubmit: SubmitHandler<UpdateHomeUniversitiesRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await updateUniversities({universities: formData.universities})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Institutional Highlights successfully updated!'})
      },
    })
  }

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open])

  return (
    <FormModal
      open={open}
      close={close}
      loading={isLoading}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <Field
        type="searchable-checkboxes"
        control={form.control}
        name="universities"
        componentProps={{
          searchPlaceholder: 'Search any school',
          options: universities?.map(university => ({label: university.title, value: university._id})),
          searching: isFetching,
          onSearch: fetchUniversities,
        }}
      />
    </FormModal>
  )
}
