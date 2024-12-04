/* eslint-disable react-hooks/exhaustive-deps */
import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader, TableLoader, TableNotFound} from '@/components/common/table/components'
import {useLazyGetAdminDashboardUniversitiesQuery} from '@/features/university'
import {UniversityStatus} from '@/constants/statusues'
import {UniversityRow} from './components'
import {PER_PAGE} from '@/constants/pagination'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {GetAdminDashboardUniversitiesRequest} from '@/features/university/types'
import {useEffect} from 'react'
import {PaginationChangePramas} from '@/components/common/pagination/types'

export const ActiveUniversities = () => {
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
          status: UniversityStatus.ACTIVE,
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
        <TableHeader className="text-left ">
          <TableHead className="rounded-tl-2xl" />
          <TableHead className="w-80 text-start">
            <span>University</span>
          </TableHead>
          <TableHead className="text-center">CONTRACT</TableHead>
          <TableHead className="text-center">Applications</TableHead>
          <TableHead className="text-center">Programms</TableHead>
          <TableHead className="text-center">RATING</TableHead>
          <TableHead className="text-center rounded-tr-2xl">More</TableHead>
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
