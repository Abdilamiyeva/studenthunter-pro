import {Pagination, Table} from '@/components/common'
import {TableHead, TableHeader} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {UniversityRow} from './components'

export const Universities = () => (
  <>
    <Table parentClassName="mb-8">
      <TableHeader className="text-left ">
        <TableHead className="rounded-tl-2xl" />
        <TableHead className="w-80 text-start">
          <button className="flex items-center gap-2 uppercase">
            <span>University name</span>
            <CaretDownFill className="w-3 h-3 text-blue-2" />
          </button>
        </TableHead>
        <TableHead className="text-center">CONTRACT</TableHead>
        <TableHead className="text-center">Applications</TableHead>
        <TableHead className="text-center">Programms</TableHead>
        <TableHead className="text-center">RATING</TableHead>
        <TableHead className="text-center rounded-tr-2xl">More</TableHead>
      </TableHeader>
      {[...new Array(10)].map((_, index) => (
        <UniversityRow key={index} index={index} />
      ))}
    </Table>
    <Pagination perPage={10} totalDataCount={50} perPageAble />
  </>
)
