import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {useUpdateSkillMutation} from '@/features/skills'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {UpdateSkillRequestBody} from '@/features/skills/types'
import {useUploadFiles} from '@/hooks/use-upload-files'

export const ProfileForm = ({open, close, skill}: Props) => {
  const [updateSkill, {isLoading: isUpdating}] = useUpdateSkillMutation()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const form = useForm<UpdateSkillRequestBody>({defaultValues: {video: skill.video}})
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateSkillRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        formData.video = (await uploadFiles([formData.video as any]))[0]
        const result = await updateSkill({skillID: skill._id, body: formData})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Skill successfully updated!'})
      },
    })
  }

  return (
    <FormModal
      open={open}
      close={close}
      loading={isUploadingFiles || isUpdating}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <Field type="single-video-upload" control={form.control} name="video" componentProps={{required: true}} />
    </FormModal>
  )
}
