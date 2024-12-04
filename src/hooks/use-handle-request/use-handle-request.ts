import {useHandleError} from './../use-handle-error/use-handle-error'
import {Params} from './types'

export const useHandleRequest = () => {
  const handleError = useHandleError()

  return async ({request, onSuccess, onError}: Params) => {
    try {
      const result = await request()

      if (result?.error) {
        if (onError) {
          onError(result.error)
        }

        handleError(result.error)

        return
      }

      if (onSuccess) {
        await onSuccess(result)
      }
    } catch (ex) {
      handleError(ex)
      console.error(ex)
    }
  }
}
