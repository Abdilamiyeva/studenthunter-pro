/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import {BoldTabs, FormModal} from '@/components/common'
import {Props} from './types'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {ReactNode, useEffect} from 'react'
import {About, AdMission, Costs, Overview} from './components'
import {useCreateFacultyMutation} from '@/features/faculty'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {CreateFacultyRequest} from '@/features/faculty/types'
import {useToast} from '@/components/ui/use-toast'
import {useValidationOptions} from '@/hooks/use-validation-options'
import {useUploadFiles} from '@/hooks/use-upload-files'
import {formatAsBackendDate} from '@/utils/format-date'

export const CreateForm = ({close, open, universityID}: Props) => {
  const [createFaculty, {isLoading: isCreating}] = useCreateFacultyMutation()
  const form = useForm<CreateFacultyRequest>({
    defaultValues: {requirements: [{exam_name: '', min_score: ''}], ['type' as any]: 'faculty'},
  })
  const handleRequest = useHandleRequest()
  const getValidationOptions = useValidationOptions()
  const [uploadFiles, uploadingFiles] = useUploadFiles()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<CreateFacultyRequest> = async formData => {
    await handleRequest({
      request: async () => {
        formData.university_id = universityID
        formData.title_uz = formData.program
        formData.title_en = formData.program
        formData.title_ru = formData.program
        if (formData.duration) {
          formData.duration = +formData.duration
        }
        if (formData.fee) {
          formData.fee = +formData.fee
        }
        if (formData.application_start) {
          formData.application_start = formatAsBackendDate(new Date(formData.application_start))
        }
        if (formData.deadline) {
          formData.deadline = formatAsBackendDate(new Date(formData.deadline))
        }
        if (formData.scholarship) {
          formData.scholarship = (await uploadFiles([formData.scholarship as any]))[0]
        }

        const result = await createFaculty(formData)
        return result
      },
      onSuccess: () => {
        toast({title: 'Faculty successfully created!'})
        close()
      },
    })
  }

  // NEED BETTER IMPLEMENTATION
  useEffect(() => {
    if (open) {
      form.register('level', getValidationOptions(true))
      form.register('faculty', getValidationOptions(form.watch('type' as any) === 'faculty'))
      form.register('about', getValidationOptions(true))
      form.register('requirements', getValidationOptions(true))
      form.register('application_start', getValidationOptions(true))
      form.register('deadline', getValidationOptions(true))
      form.register('fee', getValidationOptions(true))
      form.register('fee_description', getValidationOptions(true))
    }
  }, [form, open])

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open])

  return (
    <FormModal
      className="min-w-[850px]"
      close={close}
      open={open}
      loading={uploadingFiles || isCreating}
      wrapForm={(content: ReactNode) => (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>{content}</Form>
        </form>
      )}
    >
      <BoldTabs
        tabs={[
          {label: 'Overview', children: <Overview form={form} />},
          {label: 'About', children: <About form={form} />},
          {label: 'Admission', children: <AdMission form={form} />},
          {label: 'Costs', children: <Costs form={form} />},
        ]}
      />
    </FormModal>
  )
}
