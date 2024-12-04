/* eslint-disable react-hooks/exhaustive-deps */
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {useUpdateHomeVacanciesMutation} from '@/features/home-edit'
import {useLazyGetPublicJobsQuery} from '@/features/jobs'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {PER_PAGE} from '@/constants/pagination'
import {VacancyStatus} from '@/constants/statusues'
import {useEffect} from 'react'
import {UpdateHomeVacanciesRequest} from '@/features/home-edit/types'

export const UpdateForm = ({open, close, vacancies: selectedVacancies}: Props) => {
  const [updateUniversities, {isLoading}] = useUpdateHomeVacanciesMutation()
  const [getVacancies, {data: {data: vacancies = []} = {}, isFetching}] = useLazyGetPublicJobsQuery()
  const form = useForm<UpdateHomeVacanciesRequest>({
    defaultValues: {
      vacancies: selectedVacancies.map(vacancy => vacancy._id),
    },
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const fetchVacancies = async (search: string) => {
    await handleRequest({
      request: async () => {
        const result = await getVacancies({
          data: encodeURIComponent(
            JSON.stringify({
              search,
              perPage: PER_PAGE,
              status: VacancyStatus.ACTIVE,
            }),
          ),
        })

        return result
      },
    })
  }

  const onSubmit: SubmitHandler<UpdateHomeVacanciesRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await updateUniversities({vacancies: formData.vacancies})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Vacancy Highlights successfully updated!'})
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
        name="vacancies"
        componentProps={{
          searchPlaceholder: 'Search any vacancies...',
          searching: isFetching,
          options: vacancies?.map(vacancy => ({label: vacancy.job_title, value: vacancy._id})),
          onSearch: fetchVacancies,
        }}
      />
    </FormModal>
  )
}
