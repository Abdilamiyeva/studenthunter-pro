import {ArrowUpIcon, ShortLeftArrowIcon, ShortRightArrowIcon} from '@/icons'
import {useState, useMemo} from 'react'
import {PerPage, Props} from './types'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {PER_PAGE, PER_PAGE_OPTIONS} from '@/constants/pagination'
import {getPaginationRange} from '@/utils/get-pagination-range/get-pagination-range'

const SIBLINGS_COUNT = 1

export const Pagination = ({perPage = PER_PAGE, totalDataCount, onPageChange, perPageAble}: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPerPage, setCurrentPerPage] = useState(perPage)
  const totalPages = useMemo(() => Math.ceil(totalDataCount / currentPerPage), [totalDataCount, currentPerPage])

  const changePage = (page: number | string) => {
    if (page === '... ') {
      setCurrentPage(1)
      if (onPageChange) {
        onPageChange({page: 1, perPage: currentPerPage})
      }
      return
    }

    if (page === ' ...') {
      setCurrentPage(totalPages - 1)
      if (onPageChange) {
        onPageChange({page: totalPages - 1, perPage: currentPerPage})
      }
      return
    }

    setCurrentPage(page as number)
    if (onPageChange) {
      onPageChange({page, perPage: currentPerPage})
    }
  }

  const changePerPage = (updatedPerPage: PerPage) => {
    setCurrentPerPage(updatedPerPage)

    if (onPageChange) {
      onPageChange({page: 1, perPage: updatedPerPage})
    }
  }

  const onArrowClick = (incrementingNum: number) => {
    if ([0, totalPages + 1].includes(currentPage + incrementingNum)) {
      return
    }

    changePage(currentPage + incrementingNum)
  }

  if (totalPages < 2) {
    return ''
  }

  return (
    <div className={perPageAble ? 'flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between' : ''}>
      {perPageAble && (
        <div className="flex items-center gap-x-2">
          <div className="text-blue-2 text-base">Items per page</div>
          <div>
            <Select
              value={`${currentPerPage}`}
              onValueChange={updatedPerPage => changePerPage(Number(updatedPerPage) as PerPage)}
            >
              <SelectTrigger className="bg-white border-blue-4 border" hideIcon>
                <SelectValue />
                <ArrowUpIcon />
              </SelectTrigger>
              <SelectContent>
                {PER_PAGE_OPTIONS.map((count, index) => (
                  <SelectItem key={index} value={count.toString()}>
                    {count}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      {totalPages > 1 ? (
        <div className="flex flex-wrap items-stretch gap-2.5 text-blue-2">
          <button
            disabled={currentPage === 1}
            onClick={() => onArrowClick(-1)}
            className="border border-blue-4 rounded min-w-[40px] h-10 grid place-content-center bg-white disabled:bg-blue-5 hover:bg-blue-5 duration-default"
          >
            <ShortLeftArrowIcon className="w-5 h-5" />
          </button>
          {getPaginationRange(totalPages, currentPage, SIBLINGS_COUNT).map((pageNum, index) => (
            <button
              disabled={currentPage === pageNum}
              onClick={() => changePage(pageNum)}
              key={index}
              className="border border-blue-4 rounded min-w-[40px] h-10 px-2 grid place-content-center bg-white disabled:bg-blue disabled:text-white hover:bg-blue-5 text-xl font-medium leading-7.5 duration-default"
            >
              {pageNum}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => onArrowClick(1)}
            className="border border-blue-4 rounded min-w-[40px] h-10 grid place-content-center bg-white disabled:bg-blue-5 hover:bg-blue-5 duration-default"
          >
            <ShortRightArrowIcon className="w-5 h-5" />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
