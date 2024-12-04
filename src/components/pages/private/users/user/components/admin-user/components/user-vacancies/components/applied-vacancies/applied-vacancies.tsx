import {Table} from '@/components/common'
import {TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {cn} from '@/lib/utils'
import {useCallback} from 'react'

export const AppliedVacancies = () => {
  const getThemeClassName = useCallback((status: number) => {
    switch (status) {
      case 0:
        return 'bg-orange-6'
      case 1:
        return 'bg-green'
      case 2:
        return 'bg-orange'
    }
  }, [])

  return (
    <div>
      <h3 className="text-2xl font-bold leading-8.5 mb-5">Applied Vacancies</h3>
      <Table>
        <TableHeader>
          <TableHead>
            <button className="flex items-center gap-2 uppercase">
              <span>Job Title</span>
              <CaretDownFill className="w-3 h-3 text-blue-2" />
            </button>
          </TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableHeader>
        <TableBody>
          {[...new Array(10)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold leading-5">Graphic Designer</p>
                  <p className="text-blue-2 leading-4">Eliasen group</p>
                </div>
              </TableCell>
              <TableCell>
                <div
                  className={cn(
                    'rounded px-3 py-1 text-sm font-medium leading-4 text-white w-max mx-auto',
                    getThemeClassName(index % 2 === 0 ? 0 : 1),
                  )}
                >
                  {
                    {
                      0: 'In Process',
                      1: 'Applied',
                      2: 'Cancelled',
                    }[index % 2 === 0 ? 0 : 1]
                  }
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
