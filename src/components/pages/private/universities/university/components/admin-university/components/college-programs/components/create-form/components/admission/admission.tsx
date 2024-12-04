import {Field} from '@/components/common'
import {Props} from './types'
import React, {useEffect, useState} from 'react'
import {useFieldArray} from 'react-hook-form'
import {TrashIcon} from '@/icons'

export const AdMission = ({form}: Props) => {
  const {fields, append, remove} = useFieldArray({control: form.control, name: 'requirements'})
  const value: {exam_name: string; min_score: string}[] = form.watch('requirements')
  const [examOptions, setExamOptions] = useState([
    {
      label: 'IELTS',
      value: 'ielts',
      disabled: false,
    },
    {
      label: 'CEFR',
      value: 'cefr',
      disabled: false,
    },
  ])

  const addAppendHandle = () => {
    append({min_score: '', exam_name: ''})
  }

  const removeItem = (index: number) => {
    remove(index)
  }

  useEffect(() => {
    const currentData = [...examOptions]
    const bValues: object | any = {}
    value.forEach(itemB => {
      bValues[itemB.exam_name] = true
    })

    currentData.forEach(itemA => (bValues[itemA.value] ? (itemA.disabled = true) : (itemA.disabled = false)))

    setExamOptions(currentData)
  }, [examOptions, value])

  return (
    <div>
      <h2 className="text-blue text-base font-bold leading-6 mb-3">Short Summary</h2>
      <Field
        type="cv-builder-md-editor"
        componentProps={{id: 'short_summary_id'}}
        control={form.control}
        name="summary"
      />
      <div className="my-10">
        <h2 className="text-blue text-base font-bold leading-6 mb-3">Requirements</h2>
        <div className="w-full rounded-lg border border-blue-4 p-5">
          <div className="grid grid-cols-2 gap-8">
            {fields.map((exam, index) => (
              <React.Fragment key={exam.id}>
                <Field
                  control={form.control}
                  componentProps={{
                    label: 'Exam score',
                    options: examOptions,
                    required: true,
                  }}
                  type="select"
                  name={`requirements.${index}.exam_name`}
                />
                <div className="flex items-center">
                  <div className="w-full">
                    <Field
                      control={form.control}
                      componentProps={{
                        className: 'w-full',
                        label: 'Min Score',
                        options: [
                          {label: '5', value: '5'},
                          {label: '5.5', value: '5.5'},
                          {label: '6', value: '6'},
                          {label: '6.5', value: '6.5'},
                        ],
                        required: true,
                      }}
                      type="select"
                      name={`requirements.${index}.min_score`}
                    />
                  </div>
                  {index !== 0 ? (
                    <button type="button" onClick={() => removeItem(index)} className="mt-8 ml-2">
                      <TrashIcon />
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <button type="button" onClick={addAppendHandle} className="text-sky text-xl font-bold leading-8 mt-7">
            + Add one more exam score
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-10">
          <Field
            name="application_start"
            control={form.control}
            componentProps={{placeholder: 'DD/MM/YYYY', label: 'Application Start date', required: true}}
            type="date-picker"
          />
          <Field
            name="deadline"
            control={form.control}
            componentProps={{placeholder: 'DD/MM/YYYY', label: 'Deadline', required: true}}
            type="date-picker"
          />
        </div>
      </div>
    </div>
  )
}
