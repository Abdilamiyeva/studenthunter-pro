import {Field, Loader} from '@/components/common'
import {Props} from './types'
import {LANGS} from '@/constants/langs'
import {LEARNING_LEVELS} from '@/constants/study-levels'
import {useGetSkillCategoriesQuery} from '@/features/skills'

export const Overview = ({form}: Props) => {
  const {data: {data: skillCategories} = {}, isFetching} = useGetSkillCategoriesQuery('')

  if (isFetching) {
    return (
      <div className="relative h-40">
        <Loader className="absolute" />
      </div>
    )
  }

  return (
    <>
      <Field type="single-video-upload" control={form.control} name="video" componentProps={{required: true}} />
      <div className="grid grid-cols-2 gap-y-10 gap-x-6 mt-10">
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
    </>
  )
}
