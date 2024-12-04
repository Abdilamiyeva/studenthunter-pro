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
import {Props} from './types'
import {useLazyGetApplicantLikedUniversitiesQuery} from '@/features/applicant/applicant'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {PER_PAGE} from '@/constants/pagination'
import {useEffect} from 'react'
import {getImageURL} from '@/utils/get-image'

export const SavedUniversities = ({userID}: Props) => {
  const [
    getApplicantSavedUniversities,
    {data: {data: savedUniversities = [], total = 0} = {}, isFetching: isFetchingSavedUniversities},
  ] = useLazyGetApplicantLikedUniversitiesQuery()
  const handleRequest = useHandleRequest()

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
      <h3 className="text-2xl font-bold leading-8.5 mb-5">Saved Colleges</h3>
      <Table>
        <TableHeader>
          <TableHead>
            <button className="flex items-center gap-2 uppercase">
              <span>University name</span>
              <CaretDownFill className="w-3 h-3 text-blue-2" />
            </button>
          </TableHead>
          <TableHead className="text-center">SAVED</TableHead>
        </TableHeader>
        <TableBody>
          {isFetchingSavedUniversities ? (
            <TableLoader colSpan={2} />
          ) : savedUniversities?.length ? (
            savedUniversities.map(university => (
              <TableRow key={university._id}>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <Avatar src={getImageURL(university.logo)} fullName={university.title} imageClassName="w-11 h-11" />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold leading-5">{university.title}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="rounded px-3 py-1 text-sm font-medium leading-4 text-white w-max mx-auto bg-blue-1">
                    Saved
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableNotFound colSpan={2} text="Nothing for saveds..." />
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
