import {Input} from '@/components/common'
import {Props} from './types'
import {formatPrice, formatPriceBackToNumber} from '@/utils/format-price'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {ArrowUpIcon} from '@/icons'
export const PriceRange = ({values = {min: 0, max: 0}, onChange}: Props) => (
  <div>
    <div className="flex items-center gap-y-1 gap-x-1 border-y border-blue-5 py-1 font-bold text-xs leading-5">
      <span className="text-xs font-bold text-blue-1 ">Currency:</span>
      <span className="text-orange-5 flex items-center">
        <Select defaultValue="USD">
          <SelectTrigger hideIcon className="text-orange-6 p-0 border-none shadow-none">
            <SelectValue />
            <ArrowUpIcon />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="UZS">UZS</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
          </SelectContent>
        </Select>
      </span>
    </div>
    <div className="flex items-center gap-4 mt-5">
      <Input
        type="price"
        value={values?.min ? formatPrice(values?.min) : ''}
        onChange={event => onChange('min', formatPriceBackToNumber(event.target.value))}
        placeholder="Min price"
        baseClassName={values.min > values.max ? 'border focus:border-orange border-[red]' : ''}
      />
      <Input
        type="price"
        value={values?.max ? formatPrice(values?.max) : ''}
        onChange={event => onChange('max', formatPriceBackToNumber(event.target.value))}
        placeholder="Max price"
        minLength={values?.min?.length}
        baseClassName={values.max < values.min ? 'border focus:border-orange border-[red]' : ''}
      />
    </div>
  </div>
)
