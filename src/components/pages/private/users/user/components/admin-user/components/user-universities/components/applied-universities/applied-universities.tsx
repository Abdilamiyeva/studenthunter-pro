/* eslint-disable react-hooks/exhaustive-deps */
import {Avatar, Pagination, Table} from '@/components/common'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableLoader,
  TableNotFound,
  TableRow,
} from '@/components/common/table/components'
import {CaretDownFill} from '@/icons'
import {cn} from '@/lib/utils'
import {useCallback, useEffect} from 'react'
import {Props} from './types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useLazyGetApplicantAppiedUniversitiesQuery} from '@/features/applicant/applicant'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {PER_PAGE} from '@/constants/pagination'
import {getImageURL} from '@/utils/get-image'

export const AppliedUniversities = ({userID}: Props) => {
  const [
    getApplicantSavedUniversities,
    {data: {data: appliedUniversities = [], total = 0} = {}, isFetching: isFetchingApplieUniversities},
  ] = useLazyGetApplicantAppiedUniversitiesQuery()
  const handleRequest = useHandleRequest()
  const getThemeClassName = useCallback((status: number) => {
    switch (status) {
      case 0:
        return 'bg-blue-1'
      case 1:
        return 'bg-green'
      case 2:
        return 'bg-orange'
      case 3:
        return 'bg-orange-6'
    }
  }, [])

  const fetchUniversities = async (params?: PaginationChangePramas) => {
    await handleRequest({
      request: async () => {
        const result = await getApplicantSavedUniversities({
          applicantID: userID,
          params: {
            page: 1,
            perPage: PER_PAGE,
            ...(params || {}),
          },
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
    <div>
      <h3 className="text-2xl font-bold leading-8.5 mb-5">Applied Colleges</h3>
      <Table>
        <TableHeader>
          <TableHead>
            <button className="flex items-center gap-2 uppercase">
              <span>University name</span>
              <CaretDownFill className="w-3 h-3 text-blue-2" />
            </button>
          </TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableHeader>
        <TableBody>
          {isFetchingApplieUniversities ? (
            <TableLoader colSpan={2} />
          ) : appliedUniversities?.length ? (
            appliedUniversities.map(university => (
              <TableRow key={university._id}>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <Avatar
                      src={getImageURL(university.university.logo)}
                      fullName={university.university.title}
                      imageClassName="w-11 h-11"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold leading-5">{university.university.title}</p>
                      <p className="text-blue-2 font-medium leading-4">{university.program}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className={cn(
                      'rounded px-3 py-1 text-sm font-medium leading-4 text-white w-max mx-auto',
                      getThemeClassName(university.university_status),
                    )}
                  >
                    {
                      {
                        0: 'In process',
                        1: 'Applied',
                        2: 'Cancelled',
                        3: 'Short listed',
                      }[university.university_status]
                    }
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableNotFound colSpan={2} text="Nothing for applieds..." />
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
    </div>
  )
}
