import {CheckIcon, PencilIcon} from '@/icons'
import {useState} from 'react'
import {Props} from './types'
import {Field} from '@/components/common/field'

export const Summary = ({form}: Props) => {
  const [editingSummaryTitle, setEditingSummaryTitle] = useState(false)

  return (
    <div className="mt-20">
      <div className="flex items-center gap-2.5">
        {editingSummaryTitle ? (
          <input
            type="text"
            placeholder="Enter summary title"
            className="text-6xl leading-14.5 font-bold border-b border-blue-2"
            {...form.register('summaryTitle')}
          />
        ) : (
          <h1 className="text-xl lg:text-6xl leading-14.5 font-bold">{form.watch('summaryTitle')}</h1>
        )}
        <button
          type="button"
          onClick={() => setEditingSummaryTitle(prev => !prev)}
          className="cursor-pointer text-blue-2"
        >
          {editingSummaryTitle ? <CheckIcon /> : <PencilIcon />}
        </button>
      </div>
      <p className="mt-1 mb-7 text-blue-1 text-sm lg:text-xl leading-7.5">
        Write 2-4 short & energetic sentenses to interest to interest the reader.Mention your role, experience & most
        importantly - your biggest achievements, best qualities and skills.
      </p>
      <Field
        control={form.control}
        name="summary"
        type="cv-builder-md-editor"
        componentProps={{
          id: 'cv-summary-editor',
        }}
      />
    </div>
  )
}
