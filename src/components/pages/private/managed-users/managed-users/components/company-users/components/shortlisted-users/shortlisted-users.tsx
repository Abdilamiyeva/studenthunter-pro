import {Table} from '@/components/common'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {UserRow} from './components'

export const ShortlistedUsers = () => (
  <Table>
    <TableHeader>
      <TableHead />
      <TableHead>
        <button className="flex items-center gap-2 uppercase">
          <span>Full Names</span>
          <CaretDownFill className="w-2.5 h-2.5 text-blue-2" />
        </button>
      </TableHead>
      <TableHead>Vacancy</TableHead>
      <TableHead className="text-center">Experience</TableHead>
      <TableHead className="text-center">IELTS</TableHead>
      <TableHead className="text-center">SAT</TableHead>
      <TableHead className="text-center">Status</TableHead>
      <TableHead className="text-center">More</TableHead>
    </TableHeader>
    <TableBody>
      {[...new Array(5)].map((_, index) => (
        <UserRow key={index} index={index} />
      ))}
    </TableBody>
  </Table>
)