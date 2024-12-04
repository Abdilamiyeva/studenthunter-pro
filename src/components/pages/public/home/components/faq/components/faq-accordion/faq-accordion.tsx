import {AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {Props} from './types'
import {MinusCircleIcon, PlusCircleIcon} from '@/icons'
import {cn} from '@/lib/utils'

export const FAQAccordion = ({faq, isActive}: Props) => (
  <AccordionItem
    value={faq.question}
    className={cn('border-0 px-0 py-2 md:p-6 rounded-lg duration-default', isActive && 'bg-blue-7')}
  >
    <AccordionTrigger className="flex md:items-center justify-between p-0 mb-4" iconClassName="hidden">
      <span className="text-sm md:text-2xl leading-5 md:leading-8.5 font-bold text-start md:text-start">
        {faq.question}
      </span>
      <span className={cn('duration-default', isActive && 'rotate-180')}>
        {isActive ? (
          <MinusCircleIcon className="text-black w-5 md:w-8 h-5 md:h-8" />
        ) : (
          <PlusCircleIcon className="w-5 md:w-8 h-5 md:h-8" />
        )}
      </span>
    </AccordionTrigger>
    <AccordionContent className="text-xs md:text-xl leading-4.5 md:leading-7.5">{faq.answer}</AccordionContent>
  </AccordionItem>
)
