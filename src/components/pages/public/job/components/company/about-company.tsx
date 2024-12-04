import {Avatar} from '@/components/common'
import {Props} from './types'
import MDEditor from '@uiw/react-md-editor'
import {getImageURL} from '@/utils/get-image'

export const AboutCompany = ({vacancy}: Props) => (
  <div className="w-full mt-10 border flex flex-col pb-9 border-blue-4 py-5 px-[30px] rounded-2xl relative">
    <h2 className="font-bold text-xl text-blue">About company</h2>
    <div className="flex items-center gap-x-4">
      <p className="text-xs md:text-sm font-normal w-3/4 text-blue-1 leading-5">
        {vacancy.company.description ? (
          <MDEditor.Markdown source={vacancy.company?.description} />
        ) : (
          <div>
            <h2 className="text-blue-2 text-center">
              <p>No description</p>
            </h2>
          </div>
        )}
      </p>
      <div className="w-36 flex items-center flex-col mt-6">
        <div className="w-[60px] h-[60px] bg-white">
          <Avatar
            src={getImageURL(vacancy.company?.logo)}
            fullName={vacancy.company.title}
            className="rounded-none max-w-full max-h-full text-center"
            type="company"
          />
        </div>
        <h2 className="text-blue text-4 font-bold">{vacancy.company.title}</h2>
      </div>
    </div>
  </div>
)
