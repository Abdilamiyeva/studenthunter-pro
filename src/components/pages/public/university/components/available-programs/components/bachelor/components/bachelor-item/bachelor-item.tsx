import {Props} from './types'

export const BachelorItem = ({label, onClick, isActive}: Props) => (
  <div
    onClick={onClick}
    className={`my-1 cursor-pointer p-2 px-3 rounded hover:bg-blue/80 hover:text-white ${
      isActive ? 'bg-blue text-white' : ''
    } text-blue`}
  >
    {label}
  </div>
)
