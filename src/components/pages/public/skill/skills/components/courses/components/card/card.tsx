import {Image, Tag} from '@/components/common'
import {Props} from './types'
import {Link} from 'react-router-dom'

export const Card = ({course}: Props) => (
  <Link to="/skills/id" className="border overflow-hidden rounded-lg border-blue-4">
    <Image
      src="./images/pages/skills/img2.png"
      alt="img"
      imageClassName="h-[200px] w-full"
      className=" max-w-full w-full"
    />
    <div className="w-full p-4">
      <div className="flex gap-2 flex-wrap">
        {['Web design', 'Design'].map(tag => (
          <Tag className="text-sm font-normal leading-4 text-blue" title={tag} />
        ))}
      </div>
      <h1 className="text-blue text-xl font-bold leading-8">{course.title}...</h1>
      <p className="text-sm font-normal text-blue-2">{course.subtitle}</p>
      <div className="flex items-center gap-x-3 mt-4">
        <p className="text-blue text-xl font-bold leading-8">${course.price}</p>
        <p className="text-blue-2 text-[18px] font-normal">${course.discount}</p>
      </div>
      <div className="flex items-center gap-x-2 text-blue-2 mt-1">
        {course.language} <div className="w-1 h-1 bg-blue-2" /> {course.hours} hours{' '}
        <div className="w-1 h-1 bg-blue-2" /> {course.level}
      </div>
    </div>
  </Link>
)
