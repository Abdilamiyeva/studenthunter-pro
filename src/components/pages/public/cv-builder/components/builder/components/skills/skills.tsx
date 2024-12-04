import {useFieldArray} from 'react-hook-form'
import {Props} from './types'
import {SkillCard} from './components'
import {SKILL_SUGGESTIONS} from './constants/skill-suggestions'
import {PlusIcon} from '@/icons'
import {cn} from '@/lib/utils'

export const Skills = ({form}: Props) => {
  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: 'skills',
  })

  const appendElement = () => {
    append({
      skillName: '',
    })
  }

  return (
    <div className="mt-20">
      <h1 className="text-xl lg:text-6xl leading-14.5 font-bold">Skills</h1>
      <p className="mt-1 mb-7 text-blue-1 text-sm lg:text-xl leading-7.5">
        Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the
        job listing (especially when applying via an online system).
      </p>
      <div className="flex flex-wrap gap-5 py-7">
        {SKILL_SUGGESTIONS.filter(skillName => !fields.find(skill => (skill as any).skillName === skillName)).map(
          (suggestion, index) => (
            <button
              type="button"
              onClick={() => append({skillName: suggestion})}
              key={index}
              className="leading-6.5 bg-blue-5 hover:bg-blue-6 duration-100 rounded-lg flex items-center gap-2.5 py-1.5 px-4"
            >
              <span className="text-blue-1">{suggestion}</span>
              <PlusIcon />
            </button>
          ),
        )}
      </div>
      <div className="flex flex-col gap-3">
        {fields.map((skill, index) => (
          <SkillCard key={skill.id} remove={() => remove(index)} form={form} index={index} />
        ))}
      </div>
      <button
        type="button"
        onClick={appendElement}
        className={cn('text-sky text-sm lg:text-xl font-bold leading-7.5', fields.length && 'mt-10')}
      >
        + Add one more skill
      </button>
    </div>
  )
}
