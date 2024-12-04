import React, {ChangeEvent} from 'react'

export interface RadioOption {
  label: string
  value: string
}

export type Props = {
  onChange?: (value: string) => void
  name?: string
  options: RadioOption[]
}

export type ComponentProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
