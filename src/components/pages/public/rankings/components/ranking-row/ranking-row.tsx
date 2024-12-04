import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {USIcon} from '@/icons/flags'

export const RankingRow = ({index, ranking}: Props) => (
  <TableRow>
    <TableCell className="text-blue text-2xl font-normal leading-8 text-center">{index + 1}</TableCell>
    <TableCell className="text-2xl font-bold leading-9">{ranking.name}</TableCell>
    <TableCell className="flex items-center gap-x-3 ">
      <USIcon />
      <span className="text-blue-1 text-xl font-normal leading-8">{ranking.country}</span>
    </TableCell>
    <TableCell className="text-blue text-2xl font-normal leading-8 text-center">{ranking.overallscore}</TableCell>
  </TableRow>
)
