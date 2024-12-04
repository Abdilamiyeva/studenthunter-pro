import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {CompanyRow} from './components'

export const SavedCompanies = () => (
  <>
    <Table parentClassName="mb-7">
      <TableHeader>
        <TableHead />
        <TableHead>
          <button className="flex items-center gap-2 uppercase">
            <span>Company name</span>
            <CaretDownFill className="w-3 h-3 text-blue-2" />
          </button>
        </TableHead>
        <TableHead className="text-center">Contact Number</TableHead>
        <TableHead className="text-center">Open Vacancies</TableHead>
        <TableHead className="text-center">Message</TableHead>
        <TableHead className="text-center">Remove</TableHead>
      </TableHeader>
      <TableBody>
        {[...new Array(10)].map((_, index) => (
          <CompanyRow key={index} index={index} />
        ))}
      </TableBody>
    </Table>
    <Pagination perPage={10} totalDataCount={50} perPageAble />
  </>
)
