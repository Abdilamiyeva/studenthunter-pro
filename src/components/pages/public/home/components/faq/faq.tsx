import {Accordion} from '@/components/ui/accordion'
import {FAQAccordion} from './components'
import {FAQs} from './constants/faq'
import {useState} from 'react'

export const FAQ = () => {
  const [activeQtn, setActiveQtn] = useState('')

  return (
    <section id="faq" className="container mx-auto py-20">
      <h2 className="text-4xl md:text-[50px] font-bold leading-9 md:leading-16 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-blue-1 text-sm md:text-2xl leading-5 md:leading-8.5 mt-2 md:mt-4 mb-7 md:mb-20 text-center">
        Need help? Here you can find answers for your common questions.
      </p>
      <Accordion
        type="single"
        collapsible
        value={activeQtn}
        onValueChange={setActiveQtn}
        className="flex flex-col md:gap-4 max-w-[952px] mx-auto"
      >
        {FAQs.map((faq, index) => (
          <FAQAccordion key={index} faq={faq} isActive={activeQtn === faq.question} />
        ))}
      </Accordion>
    </section>
  )
}
