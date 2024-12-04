import {Field} from '@/components/common'
import {ArrowUpIcon, TrashIcon} from '@/icons'
import {cn} from '@/lib/utils'
import {useCallback, useState} from 'react'
import {Props} from './types'

export const LangCard = ({remove, form, index}: Props) => {
  const [open, setOpen] = useState(false)
  const getFieldName = useCallback((name: string) => `langs.${index}.${name}`, [index])
  const language = form.watch(`langs.${index}.language`)
  const level = form.watch(`langs.${index}.level`)

  return (
    <div className="flex items-start gap-2.5">
      <div
        className="w-full border border-blue-4 rounded-lg overflow-hidden duration-300"
        style={{height: (open ? 270 : 104) + 'px'}}
      >
        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          className="flex items-center justify-between w-full rounded-lg py-6 px-7 hover:bg-blue-5 duration-default"
        >
          {language && level ? (
            <div className="text-start">
              <h3 className="text-xl leading-7.5 font-bold">{language}</h3>
              <p className="text-blue-2 leading-6.5">{level}</p>
            </div>
          ) : (
            <span className="h-[56px] text-xl font-bold leading-7.5 flex items-center">(Not specified)</span>
          )}
          <ArrowUpIcon className={cn('w-8 h-8 text-blue-2 duration-default', open && 'rotate-180')} />
        </button>
        <div className="grid grid-cols-2 gap-y-7 gap-x-12 py-3 px-7">
          <Field
            type="second-input"
            control={form.control}
            name={getFieldName('language')}
            componentProps={{
              label: 'Language',
              placeholder: 'Enter language',
              required: true,
            }}
          />
          <Field
            type="second-input"
            control={form.control}
            name={getFieldName('level')}
            componentProps={{
              label: 'Level',
              placeholder: 'Enter your level',
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
