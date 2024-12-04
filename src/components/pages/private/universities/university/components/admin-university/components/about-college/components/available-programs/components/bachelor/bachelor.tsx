import {Input} from '@/components/common'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {BachelorData} from './constants/bachelor'
import {BachelorItem} from './components/bachelor-item/bachelor-item'

export const Bachelor = () => (
  <div>
    <Input type="search" />
    <Accordion type="single" collapsible className="mt-2">
      {BachelorData.map(item => (
        <AccordionItem value={item.key}>
          <AccordionTrigger>
            <div className="flex items-center gap-x-1 ">
              <h2>{item.label}</h2>
              <div className="p-2 w-7 h-7 rounded-full text-xs bg-blue-5 flex justify-center items-center text-blue">
                {item.count}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="relative pl-4 py-2">
            {item.content.map(content => (
              <BachelorItem item={content} />
            ))}
            <span className="absolute top-0 left-2 border border-blue-2 border-dashed h-4/5 "></span>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
)
