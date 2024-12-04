import {Field} from '@/components/common'
import {ArrowUpIcon, TrashIcon} from '@/icons'
import {cn} from '@/lib/utils'
import {useCallback, useState} from 'react'
import {Props} from './types'

export const SkillCard = ({remove, form, index}: Props) => {
  const [open, setOpen] = useState(false)
  const getFieldName = useCallback((name: string) => `skills.${index}.${name}`, [index])
  const skillName = form.watch(`skills.${index}.skillName`)

  return (
    <div className="flex items-start gap-2.5">
      <div
        className="w-full border border-blue-4 rounded-lg overflow-hidden duration-300"
        style={{height: (open ? 240 : 80) + 'px'}}
      >
        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          className="flex items-center justify-between w-full rounded-lg py-6 px-7 hover:bg-blue-5 duration-default"
        >
          <div className="text-start">
            <h3 className="text-xl leading-7.5 font-bold">{skillName || '(Not specified)'}</h3>
          </div>
          <ArrowUpIcon className={cn('w-8 h-8 text-blue-2 duration-default', open && 'rotate-180')} />
        </button>
        <div className="py-3 px-7">
          <Field
            type="second-input"
            control={form.control}
            name={getFieldName('skillName')}
            componentProps={{
              label: 'Skill',
              placeholder: 'Enter skill name',
              required: true,
            }}
          />
        </div>
      </div>
      <button type="button" onClick={remove} className="min-w-max mt-10 text-blue-2">
        <TrashIcon />
      </button>
    </div>
  )
}
