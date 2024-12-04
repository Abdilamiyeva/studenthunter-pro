import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {UpdateSkillRequestBody} from '@/features/skills/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useUpdateSkillMutation} from '@/features/skills'

export const EditForm = ({open, close, skill}: Props) => {
  const [updateSkill, {isLoading: isUpdating}] = useUpdateSkillMutation()
  const form = useForm<UpdateSkillRequestBody>({defaultValues: {link: skill.link}})
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
      <h5 className="text-xl font-bold leading-7.5 mb-7">Referal link</h5>
      <Field
        type="second-input"
        control={form.control}
        name="link"
        componentProps={{
          label: 'Link',
          required: true,
          placeholder: 'Enter link',
        }}
      />
    </FormModal>
  )
}
