import {Props} from './types'

export const BachelorItem = ({item}: Props) => (
  <div className={`my-1 cursor-pointer p-2 px-3 rounded ${item.active ? 'bg-blue text-white' : 'text-blue-1'}`}>
    {item.label}
  </div>
)
