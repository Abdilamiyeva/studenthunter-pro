import {Button} from '@/components/common'
import {EditIcon} from '@/icons'

export const About = () => (
  <section id="about" className="section mt-10 md:mt-20 bg-blue-7 py-4 px-5 sm:py-6 sm:px-8 rounded-2xl">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-1">
      <h5 className="text-xl font-bold leading-7.5">About Programm</h5>
      <Button className="rounded px-7 h-8 py-1 text-sm" icon={<EditIcon className="w-3 h-3" />}>
        Edit
      </Button>
    </div>
    <p className="my-4 text-blue-1 text-sm leading-6">
      Hult brings together forward-thinking people from all over the world to learn business by doing business. So they
      graduate ready to make an impact that matters and lead others to do the same. Hult is proud to be recognized and
      ranked as among the best business schools in the world by some of the most prestigious independent ranking and
      accreditation bodies. It is recognized by business education’s three most prestigious international accrediting
      bodies: The Association to Advance Collegiate Schools of Business (AACSB International), the Association of MBAs
      (AMBA), and EQUIS (The European Quality Improvement...
    </p>
    <button className="text-sm font-bold leading-5">Read more ...</button>
  </section>
)
