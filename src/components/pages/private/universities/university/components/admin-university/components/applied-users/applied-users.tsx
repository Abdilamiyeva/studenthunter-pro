/* eslint-disable react-hooks/exhaustive-deps */
import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader, TableLoader, TableNotFound} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {UserRow} from './components'
import {useLazyGetUniversityAppliedUsersQuery} from '@/features/university'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {PER_PAGE} from '@/constants/pagination'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {UniversityAppliedUserStatus} from '@/constants/statusues'

export const AppliedUsers = () => {
  const [getUniversityAppliedUsers, {data: {data: users = [], total = 0, currentPage = 1} = {}, isFetching}] =
    useLazyGetUniversityAppliedUsersQuery()
  const params = useParams()
  const handleRequest = useHandleRequest()

  const fetchUniversities = async (requestParams?: PaginationChangePramas) => {
    await handleRequest({
      request: async () => {
        const result = await getUniversityAppliedUsers({
          universityID: params.id as string,
          params: {
            page: 1,
            perPage: PER_PAGE,
            status: [
              UniversityAppliedUserStatus.ACCEPTED,
              UniversityAppliedUserStatus.NOT_SET,
              UniversityAppliedUserStatus.REJECTED,
              UniversityAppliedUserStatus.SHORTLISTED,
            ],
            ...(requestParams || {}),
          },
        })
        return result
      },
    })
  }

  const onPaginationChange = (requestParams: PaginationChangePramas) => {
    fetchUniversities(requestParams)
  }

  useEffect(() => {
    fetchUniversities()
  }, [])

  return (
    <>
      <Table>
        <TableHeader>
          <TableHead />
          <TableHead className="flex pl-4">
            Full Names
            <span>
              <CaretDownFill className="text-blue-2 w-3 h-3 ml-2 mt-px" />
            </span>
          </TableHead>
          <TableHead className="pl-8">Program</TableHead>
          <TableHead className="text-center">gpa</TableHead>
          <TableHead className="text-center">IELTS</TableHead>
          <TableHead className="text-center">sat</TableHead>
          <TableHead className="text-center">status</TableHead>
          <TableHead className="text-center px-5">more</TableHead>
        </TableHeader>
        <TableBody>
          {isFetching ? (
            <TableLoader colSpan={8} />
          ) : users?.length ? (
            users.map((user, index) => (
              <UserRow key={user._id} index={(currentPage - 1) * PER_PAGE + index} user={user} />
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
