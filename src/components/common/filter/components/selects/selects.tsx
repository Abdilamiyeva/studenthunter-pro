import {Props} from './types'

export const Selects = ({values, onChange, selects}: Props) => (
  <div className="flex flex-col gap-3.5">
    {selects.map((select, index) => (
      <label key={index} className="flex items-center justify-between cursor-pointer">
        <input
          type="checkbox"
          className="peer"
          hidden
          checked={values[select.value] || false}
          onChange={e => onChange({...values, [select.value]: e.target.checked})}
        />
        <span className="text-blue-2 peer-checked:text-blue text-sm font-medium leading-4.5 duration-default">
          {select.label}
        </span>
      </label>
    ))}
  </div>
)
