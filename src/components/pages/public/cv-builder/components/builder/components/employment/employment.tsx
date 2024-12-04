import {useFieldArray} from 'react-hook-form'
import {Props} from './types'
import {EmploymentCard} from './components'
import {cn} from '@/lib/utils'

export const Employment = ({form}: Props) => {
  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: 'employments',
  })

  const appendElement = () => {
    append({
      profession: '',
      companyName: '',
      dates: {
        start: undefined,
        end: undefined,
      },
      city: '',
      description: '',
    })
  }

  return (
    <div className="mt-20">
      <h1 className="text-xl lg:text-6xl leading-14.5 font-bold">Employment History</h1>
      <p className="mt-1 mb-7 text-blue-1 text-sm lg:text-xl leading-5 lg:leading-7.5">
        Show your relevant experience. Use bullet points to note your achievements, if possible - use numbers/facts.
      </p>
      <div className="flex flex-col gap-3">
        {fields.map((employment, index) => (
          <EmploymentCard key={employment.id} index={index} remove={() => remove(index)} form={form} />
        ))}
      </div>
      <button
        type="button"
        onClick={appendElement}
        className={cn('text-sky text-sm lg:text-xl font-bold leading-7.5', fields.length && 'mt-10')}
      >
        + Add employment
      </button>
    </div>
  )
}
