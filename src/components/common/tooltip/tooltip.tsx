import {Tooltip as TooltipUI, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import {Props} from './types'

export const Tooltip = ({children, content}: Props) => (
  <TooltipProvider>
    <TooltipUI>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="bg-white shadow-box">{content}</TooltipContent>
    </TooltipUI>
  </TooltipProvider>
)
