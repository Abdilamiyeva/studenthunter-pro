import MDEditor from '@uiw/react-md-editor'
import {Props} from './types'
import {Avatar} from '@/components/common'
import {getImageURL} from '@/utils/get-image'

export const Company = ({vacancy}: Props) => (
  <section id="company" className="section">
    <div className="border border-blue-4 rounded-2xl py-4 px-5 sm:py-6 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h1 className="text-blue text-xl font-bold leading-7 mb-2 sm:mb-0">About Company</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row pt-6 gap-x-7">
        <div className="flex">
          <MDEditor.Markdown source={vacancy.company.description?.slice(0, 450)} />
        </div>
        <div className="flex flex-col gap-2 w-full justify-center items-center md:min-w-[125px]">
          <Avatar src={getImageURL(vacancy.company.logo)} fullName={vacancy.company.title} className="w-20 h-20" />
          <h5 className="text-md font-bold text-center">{vacancy.company.title}</h5>
        </div>
      </div>
    </div>
  </section>
)
