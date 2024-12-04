export type PaginationChangePramas = {
  page: number
  perPage: number
}

export type PerPage = 10 | 20 | 50 | 100

export type Props = {
  perPage?: PerPage
  totalDataCount: number
  onPageChange?: (params: ChangePramas) => void
  perPageAble?: boolean
}
