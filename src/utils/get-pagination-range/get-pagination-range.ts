export const getNumericRange = (from: number, to: number) => {
  if (to <= from) {
    return []
  }

  return [...new Array(to - from)].map((_, index) => index + from)
}

export const getPaginationRange = (totalPage: number, page: number, siblings: number) => {
  const totalPageNoInArray = 7 + siblings * 2
  if (totalPageNoInArray >= totalPage) {
    return getNumericRange(1, totalPage + 1)
  }

  const leftSiblingsIndex = Math.max(page - siblings, 1)
  const rightSiblingsIndex = Math.min(page + siblings, totalPage)

  const showLeftDots = leftSiblingsIndex > 2
  const showRightDots = rightSiblingsIndex < totalPage - 2

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = 3 + siblings * 2
    const leftRange = getNumericRange(1, leftItemsCount + 1)
    return [...leftRange, ' ...', totalPage]
  } else if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + siblings * 2
    const rightRange = getNumericRange(totalPage - rightItemsCount + 1, totalPage + 1)
    return [1, '... ', ...rightRange]
  } else {
    const middleRange = getNumericRange(leftSiblingsIndex, rightSiblingsIndex + 1)
    return [1, '... ', ...middleRange, ' ...', totalPage]
  }
}
