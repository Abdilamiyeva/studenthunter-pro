import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog'
import {Props} from './types'
import {CloseIcon} from '@/icons'
import {Button} from '..'
import {cn} from '@/lib/utils'

export const FormModal = ({open, close, children, className, wrapForm, loading}: Props) => (
  <Dialog open={open} onOpenChange={close}>
    <DialogContent className={cn('bg-white p-0 !rounded-none gap-0 min-w-[700px]', className)}>
      <DialogHeader className="flex items-end justify-center bg-blue-5 h-10 px-4">
        <button type="button" onClick={close} className="p-0.5 hover:bg-blue-6 duration-default rounded">
          <CloseIcon className="w-6 h-6" />
        </button>
      </DialogHeader>
      {wrapForm(
        <>
          <div className="pt-10 px-16 max-h-[50vh] overflow-x-hidden overflow-y-auto">{children}</div>
          <div className="px-16 pt-9 pb-6 flex items-center justify-between">
            <Button
              onClick={close}
              theme="orange"
              className="px-8 py-2 rounded text-sm font-bold leading-5 min-w-[116px]"
            >
              Cancel
            </Button>
            <Button
              loading={loading}
              htmlType="submit"
              className="px-8 py-2 rounded bg-sky-1 border-sky-1 hover:bg-sky-1/90 text-sm font-bold leading-5 min-w-[116px]"
            >
              Save
            </Button>
          </div>
        </>,
      )}
    </DialogContent>
  </Dialog>
)
