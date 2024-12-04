import {BoldTabs, Field, FormModal} from '@/components/common'
import {FormDataI, Props} from './types'
import {useForm} from 'react-hook-form'
import {Form} from '@/components/ui/form'
import {English, Russian, Uzbek} from './components'
import {useEffect} from 'react'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useUpdateBlogMutation} from '@/features/blogs'
import {useToast} from '@/components/ui/use-toast'
import {useUploadFiles} from '@/hooks/use-upload-files'

export const EditForm = ({close, open, defaultValues, blogId}: Props) => {
  const form = useForm({defaultValues})
  const [updateBlog, {isLoading}] = useUpdateBlogMutation()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()

  const handleSubmit = async (formData: FormDataI) => {
    await handleRequest({
      request: async () => {
        if (typeof formData.image !== 'string') {
          const newImageArray = formData.image[0] as File
          formData.image = (await uploadFiles([newImageArray] as any))[0]
        }
        const result = await updateBlog({id: blogId, body: {...formData}})
        return result
      },
      onSuccess: () => {
        toast({
          title: 'Blog successfully updated',
        })
        form.reset()
        close()
      },
    })
  }

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open, form])

  useEffect(() => {
    if (defaultValues?.text_en) {
      form.setValue('text_en', defaultValues.text_en)
      form.setValue('text_uz', defaultValues.text_uz)
      form.setValue('text_ru', defaultValues.text_ru)
      form.setValue('text_en', defaultValues.text_en)
      form.setValue('title_en', defaultValues.title_en)
      form.setValue('title_uz', defaultValues.title_uz)
      form.setValue('title_ru', defaultValues.title_ru)
      form.setValue('tags', defaultValues.tags)
      form.setValue('image', defaultValues.image)
    }
  }, [defaultValues, form])

  return (
    <FormModal
      loading={isLoading || isUploadingFiles}
      className="max-w-[1000px]"
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(handleSubmit as () => Promise<void>)}>
          <Form {...form}>{content}</Form>
        </form>
      )}
      open={open}
      close={close}
    >
      <div className="w-full gap-x-7 flex items-stretch">
        <div className="w-[40%]">
          <Field type="full-functioned-photo-uploader" name="image" control={form.control} />
        </div>
        <div className="w-[60%] border border-blue-4 p-5 mt-4 rounded-2xl">
          <Field
            type="tag-input"
            name="tags"
            control={form.control}
            componentProps={{className: 'w-full', placeholder: 'Enter tags'}}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-16">
        <BoldTabs
          tabs={[
            {label: 'English', children: <English form={form} />},
            {label: 'Uzbek', children: <Uzbek form={form} />},
            {label: 'Russian', children: <Russian form={form} />},
          ]}
        />
      </div>
    </FormModal>
  )
}
