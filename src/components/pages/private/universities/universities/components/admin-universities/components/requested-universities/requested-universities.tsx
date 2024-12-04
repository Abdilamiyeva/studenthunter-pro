/* eslint-disable react-hooks/exhaustive-deps */
import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader, TableLoader, TableNotFound} from '@/components/common/table/components'
import {UniversityRow} from './components'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {GetAdminDashboardUniversitiesRequest} from '@/features/university/types'
import {useLazyGetAdminDashboardUniversitiesQuery} from '@/features/university'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useEffect} from 'react'
import {UniversityStatus} from '@/constants/statusues'
import {PER_PAGE} from '@/constants/pagination'

export const RequestedUniversities = () => {
  const [
    getUniversities,
    {data: {data: universities = [], afterFilteringCount = 0, currentPage = 1} = {}, isFetching},
  ] = useLazyGetAdminDashboardUniversitiesQuery()
  const handleRequest = useHandleRequest()

  const fetchUniversities = async (params?: GetAdminDashboardUniversitiesRequest) => {
    await handleRequest({
      request: async () => {
        const result = await getUniversities({
          page: 1,
          perPage: PER_PAGE,
          ...(params || {}),
          status: UniversityStatus.PENDING,
        })
        return result
      },
    })
  }

  const onPaginationChange = (pramas: PaginationChangePramas) => {
    fetchUniversities(pramas)
  }

  useEffect(() => {
    fetchUniversities()
  }, [])

  return (
    <>
      <Table>
        <TableHeader>
          <TableHead />
          <TableHead className="w-80 text-start">university name</TableHead>
          <TableHead className="text-center">Contact Number</TableHead>
          <TableHead className="text-center">Programs</TableHead>
          <TableHead className="text-center">Confirm</TableHead>
          <TableHead className="text-center">Delete</TableHead>
        </TableHeader>
        <TableBody>
          {isFetching ? (
            <TableLoader colSpan={7} />
          ) : universities?.length ? (
            universities.map((university, index) => (
              <UniversityRow
                key={university._id}
                index={(currentPage - 1) * PER_PAGE + index}
                university={university}
              />
            ))
          ) : (
            <TableNotFound colSpan={7} />
          )}
        </TableBody>
      </Table>
      {afterFilteringCount ? (
        <div className="my-8">
          <Pagination
            totalDataCount={afterFilteringCount}
            onPageChange={onPaginationChange}
            perPage={PER_PAGE}
            perPageAble
          />
        </div>
      ) : (
        ''
      )}
    </>
  )
}
