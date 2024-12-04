import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import {cn} from '@/lib/utils'
import {CheckIcon} from '@/icons'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({className, ...props}, ref) => <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />)
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({className, ...props}, ref) => (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="min-w-[16px] min-h-[16px] border border-blue bg-blue text-white peer-checked:bg-blue text-transparent peer-checked:text-white grid place-content-center rounded-full duration-100">
          <CheckIcon className="w-2 h-2" />
        </div>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  ))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export {RadioGroup, RadioGroupItem}
