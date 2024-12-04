export const calcDuration = (startYear: number, endYear: number, startMonth: number, endMonth: number) => {
  const timeDifference = new Date(endYear, endMonth - 1, 1).getTime() - new Date(startYear, startMonth - 1, 1).getTime()

  const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000))
  const months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000))

  let durationStr = `${years} ${years === 1 ? 'yr' : 'yrs'}`
  if (months > 0) {
    durationStr += ` ${months} mo`
  }

  return durationStr
}
