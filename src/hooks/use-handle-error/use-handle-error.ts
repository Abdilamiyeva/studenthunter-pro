import {useToast} from '@/components/ui/use-toast'
import {useErrorMsg} from '../use-error-msg'

export const useHandleError = () => {
  const {toast} = useToast()
  const getErrorMsg = useErrorMsg()

  return (error: any) => {
    toast({
      variant: 'destructive',
      title: getErrorMsg(error),
    })
  }
}
