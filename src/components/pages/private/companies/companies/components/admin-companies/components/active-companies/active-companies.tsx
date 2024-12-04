/* eslint-disable react-hooks/exhaustive-deps */
import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader, TableLoader, TableNotFound} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {CompanyRow} from './components'
import {useLazyGetCompaniesQuery} from '@/features/company'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {CompanyStatus} from '@/constants/statusues'
import {PER_PAGE} from '@/constants/pagination'
import {useEffect} from 'react'

export const ActiveCompanies = () => {
  const [getCompanies, {data: {data: companies = [], total = 0, page = 1} = {}, isFetching}] =
    useLazyGetCompaniesQuery()
  const handleRequest = useHandleRequest()

  const fetchUniversities = async (params?: PaginationChangePramas) => {
    await handleRequest({
      request: async () => {
        const result = await getCompanies({
          page: 1,
          per_page: PER_PAGE,
          ...(params ? {...params, per_page: params.perPage} : {}),
          status: CompanyStatus.ACTIVE,
        })
        return result
      },
    })
  }

  const onPaginationChange = (paginationParams: PaginationChangePramas) => {
    fetchUniversities(paginationParams)
  }

  useEffect(() => {
    fetchUniversities()
  }, [])

  return (
    <>
      <Table parentClassName="mb-8">
        <TableHeader>
          <TableHead />
          <TableHead>
            <button className="flex items-center gap-2 uppercase">
              <span>Company name</span>
              <CaretDownFill className="w-3 h-3 text-blue-2" />
            </button>
          </TableHead>
          <TableHead className="text-center">Contract</TableHead>
          <TableHead className="text-center">Applications</TableHead>
          <TableHead className="text-center">Contact Number</TableHead>
          <TableHead className="text-center">INN</TableHead>
          <TableHead className="text-center">More</TableHead>
        </TableHeader>
        <TableBody>
          {isFetching ? (
            <TableLoader colSpan={7} />
          ) : companies?.length ? (
            companies.map((company, index) => (
              <CompanyRow key={company._id} index={(page - 1) * PER_PAGE + index} company={company} />
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
