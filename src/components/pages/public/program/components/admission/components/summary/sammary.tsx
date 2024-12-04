import {Props} from './types'

export const Summary = ({summary}: Props) =>
  summary ? (
    <p className="text-sm font-normal leading-normal text-blue-2">{summary}</p>
  ) : (
    <div className="flex justify-center items-center text-blue-2 h-20">
      <p>No summary provided</p>
    </div>
  )
