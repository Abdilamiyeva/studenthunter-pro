import {Tag} from '@/components/common'

export const Skills = () => (
  <section id="skills" className="section border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
    <h3 className="text-xl font-bold leading-7 mb-6">Skills</h3>
    <div className="flex flex-wrap gap-x-1.5 gap-y-2">
      {[...new Array(10)].map((_, index) => (
        <Tag key={index} title="Full time" />
      ))}
    </div>
  </section>
)
