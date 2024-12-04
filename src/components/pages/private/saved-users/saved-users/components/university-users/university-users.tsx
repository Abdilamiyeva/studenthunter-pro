import {Table} from '@/components/common'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {UserRow} from './components'

export const UniversityUsers = () => (
  <Table>
    <TableHeader>
      <TableHead />
      <TableHead>
        <button className="flex items-center gap-2 uppercase">
          <span>Full Names</span>
          <CaretDownFill className="w-2.5 h-2.5 text-blue-2" />
        </button>
      </TableHead>
      <TableHead>School name</TableHead>
      <TableHead className="text-center">GPA</TableHead>
      <TableHead className="text-center">IELTS</TableHead>
      <TableHead className="text-center">SAT</TableHead>
      <TableHead className="text-center">Status</TableHead>
    </TableHeader>
    <TableBody>
      {[...new Array(10)].map((_, index) => (
        <UserRow key={index} index={index} />
      ))}
    </TableBody>
  </Table>
)
