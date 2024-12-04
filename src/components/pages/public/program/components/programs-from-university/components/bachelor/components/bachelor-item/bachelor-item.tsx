import {Props} from './types'

export const BachelorItem = ({label}: Props) => (
  <div className={`my-1 cursor-pointer p-2 px-3 text-blue-1 rounded hover:bg-blue hover:text-white`}>{label}</div>
)
