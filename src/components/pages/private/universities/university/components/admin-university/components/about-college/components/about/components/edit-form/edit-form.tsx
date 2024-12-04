/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {UpdateUniversityRequestBody} from '@/features/university/types'
import {useUpdateUniversityMutation} from '@/features/university'

export const EditForm = ({close, open, university}: Props) => {
  const [updateUniversity, {isLoading: isUpdating}] = useUpdateUniversityMutation()
  const form = useForm<UpdateUniversityRequestBody>({
    defaultValues: {
      description_en: university.description_en,
      description_ru: university.description_ru,
      description_uz: university.description_uz,
    },
  })
  const handleRequest = useHandleRequest()

  const onSubmit: SubmitHandler<UpdateUniversityRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await updateUniversity({
          universityID: university._id,
          body: formData,
        })
        return result
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
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-blue-1 font-bold leading-6 mb-2.5">Description in English:</p>
          <Field
            control={form.control}
            name="description_en"
            type="cv-builder-md-editor"
            componentProps={{
              id: 'update-university-about-editor-en',
            }}
          />
        </div>
        <div>
          <p className="text-blue-1 font-bold leading-6 mb-2.5">Description in Russia:</p>
          <Field
            control={form.control}
            name="description_ru"
            type="cv-builder-md-editor"
            componentProps={{
              id: 'update-university-about-editor-ru',
            }}
          />
        </div>
        <div>
          <p className="text-blue-1 font-bold leading-6 mb-2.5">Description in Uzbek:</p>
          <Field
            control={form.control}
            name="description_uz"
            type="cv-builder-md-editor"
            componentProps={{
              id: 'update-university-about-editor-uz',
            }}
          />
        </div>
      </div>
    </FormModal>
  )
}
