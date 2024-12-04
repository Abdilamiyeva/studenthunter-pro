import {Tag} from '@/components/common'
import {Props} from './types'

export const Skills = ({vacancy}: Props) => (
  <div className="mt-10 w-full border border-px border-blue-4 p-3 px-8 rounded-2xl ">
    <h2 className="font-bold text-xl text-blue my-6">Skills</h2>
    <div className="flex flex-wrap gap-x-4 gap-y-2 my-2">
      {vacancy.skills.length ? (
        vacancy.skills.map((item, index) => <Tag key={index} title={item} />)
      ) : (
        <div className="flex justify-center items-center h-20 text-blie-2">
          <p>No skills</p>
        </div>
      )}
    </div>
  </div>
)
