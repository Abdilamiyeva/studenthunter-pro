import MDEditor from '@uiw/react-md-editor'
import {Props} from './types'

export const AboutCompany = ({company}: Props) => (
  <div className="w-full rounded-2xl h-full overflow-hidden border border-blue-4 pt-5 pl-[30px] pr-20 pb-10">
    <h1 className="text-xl text-blue font-bold leading-7">About company</h1>
    <p className="font-normal leading-5 text-blue-1 mt-6">
      {company.description ? (
        <MDEditor.Markdown source={company.description} />
      ) : (
        <div className="flex justify-center items-center h-20 text-blue-2">
          <p>No Description</p>
        </div>
      )}
    </p>
  </div>
)
