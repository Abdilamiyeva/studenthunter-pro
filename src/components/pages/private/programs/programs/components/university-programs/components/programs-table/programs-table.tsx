import {Table} from '@/components/common'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {ProgramRow} from './components'

export const ProgramsTable = () => (
  <Table>
    <TableHeader>
      <TableHead />
      <TableHead>
        <button className="flex items-center gap-2 uppercase">
          <span>Full Names</span>
          <CaretDownFill className="w-3 h-3 text-blue-2" />
        </button>
      </TableHead>
      <TableHead>Faculty</TableHead>
      <TableHead className="text-end">Tution</TableHead>
      <TableHead className="text-center">IELTS</TableHead>
      <TableHead className="text-center">SAT</TableHead>
      <TableHead className="text-center">Deadline</TableHead>
      <TableHead className="text-center">More</TableHead>
    </TableHeader>
    <TableBody>
      {[...new Array(10)].map((_, index) => (
        <ProgramRow key={index} index={index} />
      ))}
    </TableBody>
  </Table>
)
