/* eslint-disable react-hooks/exhaustive-deps */
import {BoldTabs, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {About, Overview, RefrralLink, WhatToLearn} from './components'
import {Props} from './types'
import {useCreateSkillMutation} from '@/features/skills'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {CreateSkillRequest} from '@/features/skills/types'
import {useUploadFiles} from '@/hooks/use-upload-files'
import {useEffect} from 'react'
import {useValidationOptions} from '@/hooks/use-validation-options'

export const CreateForm = ({open, close}: Props) => {
  const [createSkill, {isLoading: isCreating}] = useCreateSkillMutation()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const form = useForm<CreateSkillRequest>()
  const handleRequest = useHandleRequest()
  const getValidationOptions = useValidationOptions()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<CreateSkillRequest> = async formData => {
    await handleRequest({
      request: async () => {
        formData.video = (await uploadFiles([formData.video as any]))[0]
        formData.categories = (formData.categories as any).split(', ')
        const result = await createSkill(formData)
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Skill successfully created!'})
      },
    })
  }

  useEffect(() => {
    if (open) {
      form.register('title', getValidationOptions(true))
      form.register('link', getValidationOptions(true))
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open])

  return (
    <FormModal
      open={open}
      close={close}
      loading={isUploadingFiles || isCreating}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
      className="min-w-[900px]"
    >
      <BoldTabs
        tabs={[
          {label: 'Overview', children: <Overview form={form} />},
          {label: 'About', children: <About form={form} />},
          {label: 'What you’ll learn', children: <WhatToLearn form={form} />},
          {label: 'Referal link', children: <RefrralLink form={form} />},
        ]}
      />
    </FormModal>
  )
}
