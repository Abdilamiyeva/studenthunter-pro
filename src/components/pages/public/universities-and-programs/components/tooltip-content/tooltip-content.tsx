import {Props} from './types'

export const TooltipContent = ({location}: Props) => <div className="px-4 py-3 text-blue-1">{location.join(', ')}</div>
