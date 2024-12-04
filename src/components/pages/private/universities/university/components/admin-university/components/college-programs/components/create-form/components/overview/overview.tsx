import {Field} from '@/components/common'
import {Props} from './types'
import {useValidationOptions} from '@/hooks/use-validation-options'
import {STUDY_ATTENDANCE, STUDY_DURATIONS, STUDY_FORMATS, STUDY_LEVELS} from '@/constants/study-levels'

export const Overview = ({form}: Props) => {
  const getValidationOptions = useValidationOptions()

  return (
    <div>
      <Field
        control={form.control}
        rules={getValidationOptions(form.watch('type' as any) === 'faculty')}
        componentProps={{placeholder: 'Select one these', label: 'Study level', options: STUDY_LEVELS, required: true}}
        name="level"
        type="select"
      />
      <div className="flex gap-x-8 mt-10 mb-7">
        <Field
          control={form.control}
          rules={getValidationOptions(true)}
          componentProps={{
            options: [
              {label: 'Only Major', value: 'only_major'},
              {label: 'Faculty', value: 'faculty'},
            ],
            required: true,
          }}
          name="type"
          type="radio-container"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-10">
        {form.watch('type') === 'faculty' && (
          <Field
            control={form.control}
            rules={getValidationOptions(form.watch('type' as any) === 'faculty')}
            componentProps={{
              label: 'Faculty Name',
              placeholder: 'Enter Faculty name',
              required: form.watch('type') === 'faculty',
            }}
            name="faculty"
            type="second-input"
          />
        )}
        <Field
          control={form.control}
          rules={getValidationOptions(true)}
          componentProps={{label: 'Major Name', placeholder: 'Enter Major name', required: true}}
          name="program"
          type="second-input"
        />
        <Field
          control={form.control}
          rules={getValidationOptions(true)}
          componentProps={{
            placeholder: 'Select one these',
            label: 'Duration',
            options: STUDY_DURATIONS,
            required: true,
          }}
          name="duration"
          type="select"
        />
        <Field
          control={form.control}
          rules={getValidationOptions(true)}
          componentProps={{placeholder: 'Select one these', label: 'Format', options: STUDY_FORMATS, required: true}}
          name="format"
          type="select"
        />

        <Field
          control={form.control}
          rules={getValidationOptions(true)}
          componentProps={{
            placeholder: 'Select one these',
            label: 'Attendance',
            options: STUDY_ATTENDANCE,
            required: true,
          }}
          name="attendance"
          type="select"
        />
        <Field
          control={form.control}
          rules={getValidationOptions(true)}
          componentProps={{placeholder: 'Enter subject name', label: 'Main Subject', required: true}}
          name="subject"
          type="second-input"
        />
      </div>
    </div>
  )
}
