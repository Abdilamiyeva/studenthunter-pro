export const formatAsBackendDate = (date: string | Date) => {
  const currentDate: Date = new Date(date)

  return `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1 <= 9 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1
  }-${currentDate.getDate() <= 9 ? `0${currentDate.getDate()}` : currentDate.getDate()}`
}
