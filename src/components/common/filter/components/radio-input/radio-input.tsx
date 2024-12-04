import {Props} from './types'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'

export const RadioInput = ({onChange, radios}: Props) => (
  <div>
    <RadioGroup onValueChange={onChange as () => void}>
      {radios.map((inputItem, index) => (
        <div key={index} className="flex mt-[14px] items-center gap-x-3  ">
          <RadioGroupItem
            className="border-none bg-blue-4 w-[18px] h-[18px] peer"
            value={inputItem.value}
            id={inputItem.value}
          />
          <Label
            className="cursor-pointer text-xs peer-aria-checked:leadin-[18px] peer-aria-checked:text-blue peer-aria-checked:font-medium peer-aria-checked:text-xs text-blue-2 peer-checked:bg-blue"
            htmlFor={inputItem.value}
          >
            {inputItem.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  </div>
)
