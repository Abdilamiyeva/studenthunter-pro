import {useFieldArray} from 'react-hook-form'
import {Props} from './types'
import {EducationCard} from './components'
import {cn} from '@/lib/utils'

export const Education = ({form}: Props) => {
  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: 'educations',
  })

  const appendElement = () => {
    append({
      degreeName: '',
      schoolName: '',
      city: '',
      description: '',
      dates: {
        start: undefined,
        end: undefined,
      },
    })
  }

  return (
    <div className="mt-20">
      <h1 className="text-xl lg:text-6xl leading-14.5 font-bold">Education</h1>
      <p className="mt-1 mb-7 text-blue-1 text-sm lg:text-xl leading-5 lg:leading-7.5">
        A varied education on your resume sums up the value that your learning and background.
      </p>
      <div className="flex flex-col gap-3">
        {fields.map((education, index) => (
          <EducationCard key={education.id} index={index} remove={() => remove(index)} form={form} />
        ))}
      </div>
      <button
        type="button"
        onClick={appendElement}
        className={cn('text-sky text-sm lg:text-xl font-bold leading-7.5', fields.length && 'mt-10')}
      >
        + Add one more education
      </button>
    </div>
  )
}
