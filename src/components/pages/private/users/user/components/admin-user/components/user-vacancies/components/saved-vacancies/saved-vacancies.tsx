import {Button, Table} from '@/components/common'
import {TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'

export const SavedVacancies = () => (
  <div>
    <h3 className="text-2xl font-bold leading-8.5 mb-5">Saved Vacancies</h3>
    <Table>
      <TableHeader>
        <TableHead>
          <button className="flex items-center gap-2 uppercase">
            <span>Job Title</span>
            <CaretDownFill className="w-3 h-3 text-blue-2" />
          </button>
        </TableHead>
        <TableHead className="text-center">Remove</TableHead>
      </TableHeader>
      <TableBody>
        {[...new Array(10)].map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold leading-5">Eliasen group</p>
                <div className="rounded px-3 py-1 text-sm font-medium leading-4 text-white w-max bg-blue-1">Saved</div>
              </div>
            </TableCell>
            <TableCell>
              <Button
                theme="orange"
                variant="outline"
                className="px-4 py-1.5 text-sm font-medium leading-5 rounded mx-auto w-max"
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
)
