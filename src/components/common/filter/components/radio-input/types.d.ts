import React from 'react'

export type Props = {
  label?: string | React.ReactNode
  value: any
  radios: any[]
  onChange: (value: string) => void
}

export type ComponentProps = {
  checked?: boolean
  onValueChange: (value: string) => void
}
