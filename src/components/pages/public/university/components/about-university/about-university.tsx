import MDEditor from '@uiw/react-md-editor'
import {Props} from './types'
import {useState} from 'react'

export const AboutUniversity = ({aboutuniversity}: Props) => {
  const [isReadMore, setIsReadMore] = useState(false)
  return (
    <div className="py-4 px-5 sm:py-6 sm:px-8 rounded-xl bg-blue-7">
      <h2 className="text-xl text-blue font-bold leading-8">About University</h2>
      <p className="text-sm font-normal leading-normal my-4 text-blue-2">
        {
          <MDEditor.Markdown
            className="text-blue-1"
            source={!isReadMore ? aboutuniversity?.description_en?.substring(0, 450) : aboutuniversity?.description_en}
          />
        }
      </p>
      {aboutuniversity?.description_en && aboutuniversity?.description_en.length > 450 && (
        <p className="text-sm font-bold text-blue cursor-pointer" onClick={() => setIsReadMore(prev => !prev)}>
          {isReadMore ? 'Hide' : 'Read more ...'}
        </p>
      )}
    </div>
  )
}
