import {DashboardFilters, Pagination, Table} from '@/components/common'
import {SelectField} from '@/components/common/dashboard-filters/types'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {useMemo} from 'react'
import {UserRow} from './components'

export const CompanyUsers = () => {
  const filterFields: SelectField[] = useMemo(
    () => [
      {
        type: 'select',
        label: 'Program',
        key: 'program',
        checkboxes: [
          {
            label: 'All Programs',
            key: 'all-programs',
            checkboxes: [
              {label: 'Web design', key: 'web-design'},
              {label: 'Data science & AI', key: 'data-science-AI'},
              {label: 'Business Administration', key: 'business-administration'},
              {label: 'Graphic design', key: 'graphic-design'},
            ],
          },
        ],
      },
      {
        type: 'select',
        label: 'IELTS',
        key: 'ielts',
        checkboxes: [
          {
            label: 'All scores',
            key: 'all-scores',
            checkboxes: [
              {label: '5.0 - 5.5', key: '5.0-5.5'},
              {label: '6.0 - 6.5', key: '6.0-6.5'},
              {label: '7.0 - 7.5', key: '7.0-7.5'},
              {label: '8.0 - 8.5', key: '8.0-8.5'},
              {label: '9.0', key: '9.0'},
            ],
          },
        ],
      },
      {
        type: 'select',
        label: 'SAT',
        key: 'sat',
        checkboxes: [
          {
            label: 'All scores',
            key: 'all-scores',
            checkboxes: [
              {label: '600 - 799', key: '600-799'},
              {label: '800 - 999', key: '800-999'},
              {label: '1000 - 1199', key: '1000-1199'},
              {label: '1200 - 1399', key: '1200-1399'},
              {label: '1400 - 1600', key: '1400-1600'},
            ],
          },
        ],
      },
      {
        type: 'select',
        label: 'Status',
        key: 'status',
        checkboxes: [
          {
            label: 'All status',
            key: 'all-status',
            checkboxes: [
              {label: 'Active', key: 'active'},
              {label: 'Inactive', key: 'inactive'},
              {label: 'Pending', key: 'pending'},
            ],
          },
        ],
      },
    ],
    [],
  )

  return (
    <>
      <DashboardFilters fields={filterFields} fieldClassName="min-w-full lg:min-w-max w-full" resetable />
      <Table parentClassName="my-7">
        <TableHeader>
          <TableHead />
          <TableHead>
            <button className="flex items-center gap-2 uppercase">
              <span>Full Names</span>
              <CaretDownFill className="w-2.5 h-2.5 text-blue-2" />
            </button>
          </TableHead>
          <TableHead className="text-center">Vacancy</TableHead>
          <TableHead className="text-center">GPA</TableHead>
          <TableHead className="text-center">IELTS</TableHead>
          <TableHead className="text-center">SAT</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">More</TableHead>
        </TableHeader>
        <TableBody>
          {[...new Array(10)].map((_, index) => (
            <UserRow key={index} index={index} />
          ))}
        </TableBody>
      </Table>
      <Pagination perPage={10} totalDataCount={50} perPageAble />
    </>
  )
}
