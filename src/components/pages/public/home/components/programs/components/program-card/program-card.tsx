import {Props} from './types'
import {Link} from 'react-router-dom'

export const ProgramCard = ({program}: Props) => (
  <Link
    to={'/programs'}
    className="flex flex-col items-center bg-white hover:bg-blue text-blue-1 hover:text-white rounded-lg shadow-box-sm md:p-6 md:pt-2.5 cursor-pointer duration-default"
  >
    <program.Icon className="w-10 md:w-24 h-10 md:h-24 text-orange-6" />
    <p className="pt-1.5 text-xs md:text-lg leading-4 md:leading-7.5 text-center">{program.name}</p>
  </Link>
)
