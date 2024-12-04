/* eslint-disable @typescript-eslint/prefer-optional-chain */
import {Checkbox} from '@/components/common'
import {Props} from './types'

export const Checkboxes = ({values, onChange, checkboxes}: Props) => (
  <div className="flex flex-col gap-3.5">
    {checkboxes && checkboxes.length ? (
      checkboxes.map(checkbox => (
        <div key={checkbox.value} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Checkbox
              checked={values[checkbox.value] || false}
              onChange={e => onChange({...values, [checkbox.value]: e.target.checked})}
              label={checkbox.label}
            />
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-blue-3 font-medium">No any options</p>
    )}
  </div>
)
