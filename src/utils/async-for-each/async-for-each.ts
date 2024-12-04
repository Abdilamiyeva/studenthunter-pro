export const asyncForEach = async (
  array: any[] = [],
  callback: (element: any, index: number, array: any[]) => Promise<boolean | void> | (boolean | void) = () => {},
) => {
  if (Array.isArray(array)) {
    for (let index = 0; index < array.length; index += 1) {
      const exit = await callback(array[index], index, array)
      if (exit) {
        break
      }
    }
  }
}
