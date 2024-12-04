/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'
import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader, TableLoader, TableNotFound} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {PER_PAGE} from '@/constants/pagination'
import {useLazyGetConsultingsQuery} from '@/features/consulting/consulting'
import {ConsultingRow} from './components'
import {ConsultingStatus} from '@/constants/statusues'

export const ActiveConsultings = () => {
  const [getConsultings, {data: {data: consultings = [], total = 0, page = 1} = {}, isFetching}] =
    useLazyGetConsultingsQuery()
  const handleRequest = useHandleRequest()

  const fetchConsultings = async (params?: PaginationChangePramas) => {
    await handleRequest({
      request: async () => {
        const result = await getConsultings({
          page: 1,
          perPage: PER_PAGE,
          status: ConsultingStatus.ACTIVE,
          ...(params || {}),
        })
        return result
      },
    })
  }

  const onPaginationChange = (pramas: PaginationChangePramas) => {
    fetchConsultings(pramas)
  }

  useEffect(() => {
    fetchConsultings()
  }, [])

  return (
    <>
      <Table parentClassName="mb-6">
        <TableHeader>
          <TableHead />
          <TableHead>
            <button className="flex items-center gap-2 uppercase">
              <span>Consulting name</span>
              <CaretDownFill className="w-3.5 h-3.5 text-blue-2" />
            </button>
          </TableHead>
          <TableHead className="text-center">Contract</TableHead>
          <TableHead className="text-center">Applications</TableHead>
          <TableHead className="text-center">Universities</TableHead>
          <TableHead className="text-center">More</TableHead>
        </TableHeader>
        <TableBody>
          {isFetching ? (
            <TableLoader colSpan={6} />
          ) : consultings?.length ? (
            consultings.map((consulting, index) => (
              <ConsultingRow key={consulting._id} index={(page - 1) * PER_PAGE + index} consulting={consulting} />
            ))
          ) : (
            <TableNotFound colSpan={6} />
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
