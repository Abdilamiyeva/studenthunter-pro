import {Props} from './types'

export const NotSetted = ({text}: Props) => (
  <span className="bg-orange-8 text-orange px-2 py-0.5 text-xs font-bold leading-5 rounded">{text || 'Not set'}</span>
)
