/* eslint-disable react-hooks/exhaustive-deps */
import {Button, Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader, TableLoader, TableNotFound} from '@/components/common/table/components'
import {CaretDownFill, PlusIcon} from '@/icons'
import {CreateForm, SkillRow} from './components'
import {useEffect, useState} from 'react'
import {useLazyGetSkillsQuery} from '@/features/skills'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {PaginationChangePramas} from '@/components/common/pagination/types'
import {PER_PAGE} from '@/constants/pagination'

export const AdminSkills = () => {
  const [openCreateForm, setOpenCreateForm] = useState(false)
  const [getUniversities, {data: {data: skills = [], after_filtering_count = 0, current_page = 1} = {}, isFetching}] =
    useLazyGetSkillsQuery()
  const handleRequest = useHandleRequest()

  const fetchUniversities = async (params?: PaginationChangePramas) => {
    await handleRequest({
      request: async () => {
        const result = await getUniversities({
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2">
        <h1 className="text-blue text-3xl sm:text-4xl font-bold leading-10">Skills</h1>
        <Button
          onClick={() => setOpenCreateForm(true)}
          icon={<PlusIcon />}
          className="bg-orange-6 px-4 sm:px-6 py-2 sm:py-3 border-transparent hover:bg-orange-6/90 text-sm sm:text-base"
        >
          Add new skill
        </Button>
      </div>
      <div className="my-8">
        <Table>
          <TableHeader>
            <TableHead />
            <TableHead className="flex pl-4">
              Skill Title
              <span>
                <CaretDownFill className="text-blue-2 w-3 h-3 ml-2 mt-px" />
              </span>
            </TableHead>
            <TableHead className="pl-8">Category</TableHead>
            <TableHead className="text-center">Created by</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-right px-5">more</TableHead>
          </TableHeader>
          <TableBody>
            {isFetching ? (
              <TableLoader colSpan={7} />
            ) : skills?.length ? (
              skills.map((skill, index) => (
                <SkillRow key={skill._id} index={(current_page - 1) * PER_PAGE + index} skill={skill} />
              ))
            ) : (
              <TableNotFound colSpan={7} />
            )}
          </TableBody>
        </Table>
        {after_filtering_count ? (
          <div className="my-8">
            <Pagination
              totalDataCount={after_filtering_count}
              onPageChange={onPaginationChange}
              perPage={PER_PAGE}
              perPageAble
            />
          </div>
        ) : (
          ''
        )}
      </div>
      <CreateForm open={openCreateForm} close={() => setOpenCreateForm(false)} />
    </>
  )
}
