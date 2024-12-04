import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {Field, FormModal, Loader} from '@/components/common'
import {Form} from '@/components/ui/form'
import {LEARNING_LEVELS} from '@/constants/study-levels'
import {LANGS} from '@/constants/langs'
import {useGetSkillCategoriesQuery, useUpdateSkillMutation} from '@/features/skills'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {UpdateSkillRequestBody} from '@/features/skills/types'

export const OverviewForm = ({open, close, skill}: Props) => {
  const {data: {data: skillCategories} = {}, isFetching} = useGetSkillCategoriesQuery('')
  const [updateSkill, {isLoading: isUpdating}] = useUpdateSkillMutation()
  const form = useForm<UpdateSkillRequestBody>({
    defaultValues: {
      created_by: skill.created_by,
      price: skill.price,
      language: skill.language,
      duration: skill.duration,
      discount_price: skill.discount_price,
      level: skill.level,
      categories: skill.categories,
    },
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateSkillRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        if (typeof formData.categories === 'string') {
          formData.categories = (formData.categories as any).split(', ')
        }
        const result = await updateSkill({skillID: skill._id, body: formData})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Skill successfully updated!'})
      },
    })
  }

  if (isFetching) {
    return (
      <div className="relative h-40">
        <Loader className="absolute" />
      </div>
    )
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
      <h5 className="text-xl font-bold leading-7.5 mb-7">Overview</h5>
      <div className="grid grid-cols-2 gap-y-10 gap-x-6">
        <Field
          type="second-input"
          control={form.control}
          name="created_by"
          componentProps={{label: 'Created by', placeholder: 'Enter author', required: true}}
        />
        <Field
          type="second-input"
          control={form.control}
          name="price"
          componentProps={{label: 'Price (USD)', placeholder: 'Enter price in USD', required: true}}
        />
        <Field
          type="select"
          control={form.control}
          name="language"
          componentProps={{label: 'Language', placeholder: 'Select language', required: true, options: LANGS}}
        />
        <Field
          type="second-input"
          control={form.control}
          name="discount_price"
          componentProps={{label: 'Discount price (USD)', placeholder: 'Enter discount price', required: true}}
        />
        <Field
          type="second-input"
          control={form.control}
          name="duration"
          componentProps={{label: 'Duration (Hours)*', placeholder: 'Enter duration', required: true}}
        />
        <Field
          type="select"
          control={form.control}
          name="level"
          componentProps={{label: 'Level', placeholder: 'Select level', required: true, options: LEARNING_LEVELS}}
        />
        <div className="col-span-2">
          <Field
            type="checkboxes-dropdown"
            control={form.control}
            name="categories"
            componentProps={{
              label: 'Categories',
              placeholder: 'Select categories',
              required: true,
              options: skillCategories?.map(category => ({label: category.title, value: category.title})),
            }}
          />
        </div>
      </div>
    </FormModal>
  )
}
