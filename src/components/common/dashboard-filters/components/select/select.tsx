import {Checkbox, Popover} from '@/components/common'
import {Props} from './types'
import {DownIcon} from '@/icons'
import {cn} from '@/lib/utils'

export const Select = ({label, checkboxes, value, onChange, className}: Props) => (
  <Popover
    content={
      <div className="flex flex-col gap-4">
        {checkboxes.map(checkbox => (
          <div key={checkbox.key}>
            <Checkbox
              label={checkbox.label}
              checked={!Object.values(value[checkbox.key] || {}).includes(false)}
              onChange={event =>
                onChange({
                  ...value,
                  [checkbox.key]: Object.fromEntries(
                    Object.keys(value[checkbox.key] || {}).map(key => [key, event.target.checked]),
                  ),
                })
              }
              {...checkboxClassNames}
            />
            <div className="flex flex-col gap-3 ml-5 mt-3">
              {checkbox.checkboxes.map(subcheckbox => (
                <Checkbox
                  key={subcheckbox.key}
                  label={subcheckbox.label}
                  checked={value[checkbox.key][subcheckbox.key]}
                  onChange={event =>
                    onChange({
                      ...value,
                      [checkbox.key]: {...(value[checkbox.key] || {}), [subcheckbox.key]: event.target.checked},
                    })
                  }
                  {...checkboxClassNames}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    }
    className="w-52"
  >
    <div
      className={cn(
        'border border-blue-4 shadow-box-sm bg-white rounded-lg py-4 px-3 w-full max-w-[196px] text-blue-2 flex items-center justify-between cursor-pointer',
        className,
      )}
    >
      <span className="text-sm">{label}</span>
      <DownIcon className="w-3 h-3" />
    </div>
  </Popover>
)

const checkboxClassNames = {
  className: 'bg-white border-blue-11 text-white min-w-[16px] min-h-[16px]',
  labelClassName: 'text-sm leading-5',
  iconClassName: 'w-2.5 h-2.5',
}
