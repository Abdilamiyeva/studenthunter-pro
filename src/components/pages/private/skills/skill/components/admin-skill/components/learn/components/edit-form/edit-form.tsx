import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {useUpdateSkillMutation} from '@/features/skills'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {UpdateSkillRequestBody} from '@/features/skills/types'

export const EditForm = ({open, close, skill}: Props) => {
  const [updateSkill, {isLoading: isUpdating}] = useUpdateSkillMutation()
  const form = useForm<UpdateSkillRequestBody>({defaultValues: {what_learned: skill.what_learned}})
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateSkillRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
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
      loading={isUpdating}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <h5 className="text-xl font-bold leading-7.5 mb-7">What you’ll learn</h5>
      <Field
        type="cv-builder-md-editor"
        control={form.control}
        name="what_learned"
        componentProps={{
          id: 'create-skill-what-to-learn-md-editor',
          placeholder:
            'Have a deep understanding of typography, color theory, photos, layout, blocking and other design theory and skills',
        }}
      />
    </FormModal>
  )
}
