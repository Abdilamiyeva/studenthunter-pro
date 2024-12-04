import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {VacancyRow} from './components'

export const AppliedVacancies = () => (
  <>
    <Table parentClassName="mb-7">
      <TableHeader>
        <TableHead />
        <TableHead>
          <button className="flex items-center gap-2 uppercase">
            <span>Job Title</span>
            <CaretDownFill className="w-3 h-3 text-blue-2" />
          </button>
        </TableHead>
        <TableHead className="text-center">Company</TableHead>
        <TableHead className="text-center">Specialties</TableHead>
        <TableHead className="text-center">Status</TableHead>
        <TableHead className="text-center">Message</TableHead>
        <TableHead className="text-center">More</TableHead>
      </TableHeader>
      <TableBody>
        {[...new Array(10)].map((_, index) => (
          <VacancyRow key={index} index={index} />
        ))}
      </TableBody>
    </Table>
    <Pagination perPage={10} totalDataCount={50} perPageAble />
  </>
)
