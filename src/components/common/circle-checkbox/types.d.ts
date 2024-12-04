import React, {ChangeEvent} from 'react'

export type Props = {
  label?: string | React.ReactNode
  checked?: boolean
  onChange?: (checked: boolean) => void
  required?: boolean
}

export type ComponentProps = {
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
