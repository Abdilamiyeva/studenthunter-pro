/* eslint-disable react-hooks/exhaustive-deps */
import {Pagination, Table} from '@/components/common'
import {TableHead, TableHeader, TableBody, TableLoader, TableNotFound} from '@/components/common/table/components'
import {VacanyRow} from './components/vacancy-row'
import {useLazyGetJobsQuery} from '@/features/jobs'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {PER_PAGE} from '@/constants/pagination'
import {useEffect} from 'react'

export const VacanciesTable = () => {
  const [getUniversities, {data: {data: vacancies = [], total = 0, page = 1} = {}, isFetching}] = useLazyGetJobsQuery()
  const handleRequest = useHandleRequest()

  const fetchUniversities = async (params?: PaginationChangePramas) => {
    await handleRequest({
      request: async () => {
        const result = await getUniversities({
          page: 1,
          per_page: PER_PAGE,
          ...(params ? {...params, per_page: params.perPage} : {}),
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
        <TableHeader className="text-left">
          <TableHead className="pr-12" />
          <TableHead className="w-4/12">Job title</TableHead>
          <TableHead className="text-left w-2/12">company</TableHead>
          <TableHead className="text-left w-2/12">Applications</TableHead>
          <TableHead className="text-left w-2/12">Specialities</TableHead>
          <TableHead className="text-left w-2/12">Salary</TableHead>
          <TableHead className="text-center w-32">More</TableHead>
        </TableHeader>
        <TableBody>
          {isFetching ? (
            <TableLoader colSpan={7} />
          ) : vacancies?.length ? (
            vacancies.map((vacancy, index) => (
              <VacanyRow key={vacancy._id} index={(page - 1) * PER_PAGE + index} vacancy={vacancy} />
            ))
          ) : (
            <TableNotFound colSpan={7} />
          )}
        </TableBody>
      </Table>
      {total ? (
        <div className="my-8">
          <Pagination totalDataCount={total} onPageChange={onPaginationChange} perPage={PER_PAGE} perPageAble />
        </div>
      ) : (
        ''
      )}
    </>
  )
}
