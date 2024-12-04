import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {useUpdateSkillMutation} from '@/features/skills'
import {UpdateSkillRequestBody} from '@/features/skills/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const EditForm = ({open, close, skill}: Props) => {
  const [updateSkill, {isLoading: isUpdating}] = useUpdateSkillMutation()
  const form = useForm<UpdateSkillRequestBody>({
    defaultValues: {
      title: skill.title,
      about: skill.about,
    },
  })
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
      <h5 className="text-xl font-bold leading-7.5 mb-7">About course</h5>
      <div className="flex flex-col gap-[30px]">
        <Field
          type="second-input"
          control={form.control}
          name="title"
          componentProps={{label: 'Skill title', placeholder: 'Enter skill title', required: true}}
        />
        <Field
          type="cv-builder-md-editor"
          control={form.control}
          name="about"
          componentProps={{
            label: 'About group',
            id: 'create-skill-about-md-editor',
            placeholder:
              'Have a deep understanding of typography, color theory, photos, layout, blocking and other design theory and skills',
          }}
        />
      </div>
    </FormModal>
  )
}
