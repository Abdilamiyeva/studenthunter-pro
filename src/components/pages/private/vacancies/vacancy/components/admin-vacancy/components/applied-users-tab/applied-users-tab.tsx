/* eslint-disable react-hooks/exhaustive-deps */
import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader, TableLoader, TableNotFound} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {UserRow} from './components'
import {useLazyGetVacancyApplicantsQuery} from '@/features/jobs'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {PER_PAGE} from '@/constants/pagination'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {VacancyApplicantStatus} from '@/constants/statusues'

export const AppliedUsersTab = () => {
  const {id} = useParams()
  const [getApplicants, {data: {data: applicants = [], total = 0, page = 1} = {}, isFetching}] =
    useLazyGetVacancyApplicantsQuery()
  const handleRequest = useHandleRequest()

  const fetchVacancies = async (params?: PaginationChangePramas) => {
    await handleRequest({
      request: async () => {
        const result = await getApplicants({
          vacancy: id as string,
          page: 1,
          perPage: PER_PAGE,
          status: [
            VacancyApplicantStatus.ACCEPTED,
            VacancyApplicantStatus.NOT_SET,
            VacancyApplicantStatus.REJECTED,
            VacancyApplicantStatus.SHORTLISTED,
          ],
          ...(params || {}),
        })
        return result
      },
    })
  }

  const onPaginationChange = (pramas: PaginationChangePramas) => {
    fetchVacancies(pramas)
  }

  useEffect(() => {
    fetchVacancies()
  }, [])

  return (
    <>
      <Table parentClassName="mt-7 mb-7">
        <TableHeader>
          <TableHead />
          <TableHead className="flex text-center">
            Full Names
            <span>
              <CaretDownFill className="text-blue-2 w-3 h-3 ml-2 mt-px" />
            </span>
          </TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Phone</TableHead>
          <TableHead className="text-center">Country</TableHead>
          <TableHead className="text-center">IELTS</TableHead>
          <TableHead className="text-center">SAT</TableHead>
          <TableHead className="text-center">More</TableHead>
        </TableHeader>
        <TableBody>
          {isFetching ? (
            <TableLoader colSpan={8} />
          ) : applicants?.length ? (
            applicants.map((applicant, index) => (
              <UserRow key={applicant._id} index={(page - 1) * PER_PAGE + index} applicant={applicant} />
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
