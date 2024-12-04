/* eslint-disable react-hooks/exhaustive-deps */
import {Button, Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader, TableLoader, TableNotFound} from '@/components/common/table/components'
import {CaretDownFill, DownloadIcon} from '@/icons'
import {UserRow} from './components'
import {useToast} from '@/components/ui/use-toast'
import {useLazyGetApplicantsQuery} from '@/features/applicant/applicant'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {PER_PAGE} from '@/constants/pagination'
import {useEffect} from 'react'

export const AdminUsers = () => {
  const [getApplicants, {data: {data: users = [], total = 0, currentPage = 1} = {}, isFetching: isFetchingApplicants}] =
    useLazyGetApplicantsQuery()
  const {toast} = useToast()
  const handleRequest = useHandleRequest()

  const fetchUniversities = async (params?: PaginationChangePramas) => {
    await handleRequest({
      request: async () => {
        const result = await getApplicants({
          page: 1,
          perPage: PER_PAGE,
          ...(params || {}),
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
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold leading-10">Users</h1>
        <Button
          onClick={() => toast({title: 'Download feature coming soon!'})}
          icon={<DownloadIcon className="w-4 h-4" />}
          theme="orange"
          className="min-w-max bg-orange-6 hover:bg-orange-6/90 border-orange-6 text-sm font-bold leading-6 py-3 px-8 rounded-lg"
        >
          &nbsp;Download Excel file
        </Button>
      </div>
      <Table parentClassName="mt-7 mb-7">
        <TableHeader>
          <TableHead />
          <TableHead>
            <button className="flex items-center gap-2 uppercase">
              <span>Full Names</span>
              <CaretDownFill className="w-2.5 h-2.5 text-blue-2" />
            </button>
          </TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Phone</TableHead>
          <TableHead className="text-center">Country</TableHead>
          <TableHead className="text-center">IELTS</TableHead>
          <TableHead className="text-center">SAT</TableHead>
          <TableHead className="text-center">More</TableHead>
        </TableHeader>
        <TableBody>
          {isFetchingApplicants ? (
            <TableLoader colSpan={8} />
          ) : users?.length ? (
            users.map((user, index) => (
              <UserRow key={user._id} index={(currentPage - 1) * PER_PAGE + index + 1} user={user} />
            ))
          ) : (
            <TableNotFound colSpan={8} />
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
