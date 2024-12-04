import {Props} from './types'

export const TableEmptyRow = ({children}: Props) => (
  <div className="px-2.5 py-1 text-orange bg-orange-8 rounded text-xs font-bold leading-5 w-max mx-auto">
    {children || 'Not set'}
  </div>
)
