import {Tag} from '@/components/common'
import {EditButton} from '../edit-button'

export const Skills = () => (
  <section id="skills" className="section border border-blue-4 rounded-2xl py-4 px-5 sm:py-6 sm:px-8">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
      <h1 className="text-blue text-xl font-bold leading-7 mb-2 sm:mb-0">Skills</h1>
      <EditButton />
    </div>
    <div className="flex flex-wrap gap-2 pt-6 sm:pt-10">
      <Tag title="HTML" />
      <Tag title="Programming" />
      <Tag title="Management" />
      <Tag title="Adobe" />
      <Tag title="Illustration" />
      <Tag title="Design" />
      <Tag title="React" />
      <Tag title="Nodejs" />
      <Tag title="Figma" />
      <Tag title="UI/UX" />
      <Tag title="CSS3" />
    </div>
  </section>
)
