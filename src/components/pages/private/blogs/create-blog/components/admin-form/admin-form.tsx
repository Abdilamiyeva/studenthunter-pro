import {BoldTabs, Button, DashboardBack, Field} from '@/components/common'
import {SubmitHandler, useForm} from 'react-hook-form'
import {FormDataI} from './types'
import {Form} from '@/components/ui/form'
import {useState} from 'react'
import {English, Russian, Uzbek} from './components'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useUploadFiles} from '@/hooks/use-upload-files'
import {useCreateBlogMutation} from '@/features/blogs'
import {useToast} from '@/components/ui/use-toast'
import {useNavigate} from 'react-router-dom'
import {BlogStatus} from '@/constants/statusues'

export const AdminForm = () => {
  const form = useForm<FormDataI>()
  const [status, setStatus] = useState(1)
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const [createBlog, {isLoading}] = useCreateBlogMutation()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()
  const navagate = useNavigate()
  const onSubmit: SubmitHandler<FormDataI> = async formData => {
    await handleRequest({
      request: async () => {
        formData.image = (await uploadFiles(formData.image as File[]))[0]
        const result = await createBlog({body: {...formData, status, image: formData.image as string}})
        return result
      },
      onSuccess: () => {
        toast({
          title: 'Blog successfully created',
        })
        form.reset()
        navagate('/dashboard/blogs')
      },
    })
  }

  return (
    <div className="mb-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-8 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <DashboardBack link="/dashboard/blogs">Back to all blogs</DashboardBack>
            <div className="flex justify-end items-center gap-4 w-full">
              <Button
                loading={(status === BlogStatus.ARCHIVED && isLoading) || isUploadingFiles}
                onClick={() => setStatus(BlogStatus.DRAFT)}
                htmlType="submit"
                variant="outline"
                className="bg-blue-13 py-2 px-5 text-sm font-bold leading-6 border-blue"
              >
                Add to Draft
              </Button>
              <Button
                onClick={() => setStatus(BlogStatus.ACTIVE)}
                htmlType="submit"
                theme="orange"
                className="bg-orange-6 hover:bg-orange-6/80 border-orange-6 py-2 px-7 text-sm font-bold leading-6"
                loading={(status === BlogStatus.ACTIVE && isLoading) || isUploadingFiles}
              >
                Publish
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="lg:w-2/6 ">
              <Field
                type="full-functioned-photo-uploader"
                name="image"
                control={form.control}
                componentProps={{
                  label: 'Upload photo',
                }}
              />
            </div>
            <div className="bg-white w-full lg:w-4/6 rounded-2xl text-blue-3 min-h-[200px] p-8 ">
              <Field
                type="tag-input"
                control={form.control}
                name="tags"
                componentProps={{label: 'Tags', placeholder: 'Enter tags'}}
              />
            </div>
          </div>
          <div className="mt-10" />
          <BoldTabs
            tabs={[
              {label: 'English', children: <English form={form} />},
              {label: 'Uzbek', children: <Uzbek form={form} />},
              {label: 'Russian', children: <Russian form={form} />},
            ]}
          />
        </form>
      </Form>
    </div>
  )
}
