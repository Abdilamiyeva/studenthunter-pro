import {useFieldArray} from 'react-hook-form'
import {Props} from './types'
import {LangCard} from './components'
import {cn} from '@/lib/utils'

export const Langs = ({form}: Props) => {
  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: 'langs',
  })

  const appendElement = () => {
    append({
      language: '',
      level: '',
    })
  }

  return (
    <div className="mt-20">
      <h1 className="text-xl lg:text-6xl leading-14.5 font-bold">Language</h1>
      <p className="mt-1 mb-7 text-blue-1 text-sm lg:text-xl leading-7.5">
        Choose up to 5 languages that you can speak
      </p>
      <div className="flex flex-col gap-3">
        {fields.map((lang, index) => (
          <LangCard key={lang.id} remove={() => remove(index)} form={form} index={index} />
        ))}
      </div>
      <button
        type="button"
        onClick={appendElement}
        className={cn('text-sky text-sm lg:text-xl font-bold leading-7.5 ', fields.length && 'mt-10')}
      >
        + Add one more language
      </button>
    </div>
  )
}
