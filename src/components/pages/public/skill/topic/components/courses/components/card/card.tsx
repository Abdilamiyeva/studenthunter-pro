import {Image, Tag} from '@/components/common'

export const Card = () => (
  <div className="w-full flex overflow-hidden border border-blue-4 rounded-2xl">
    <Image src="/images/pages/skills/img2.png" className="w-[360px] h-[205px]" imageClassName="w-full h-full" />
    <div className="p-6">
      <div className="flex gap-x-6">
        <div>
          <h1 className="text-blue text-2xl font-bold leading-8">Complete figma design course</h1>
          <p className="text-blue-1 text-sm font-normal  leading-snug w-[483px]">
            {' '}
            Have a deep understanding of typography, color theory, photos, layout, blocking and other design theory and
            skills
          </p>
          <p className="text-blue text-base font-medium leading-normal mt-2">Udemy</p>
        </div>
        <div>
          <p className="text-blue text-xl font-bold leading-8">$11.99</p>
          <del className=" text-blue-2 text-lg font-normal line-through leading-7">$74.99</del>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div>
          <div className="flex items-center gap-x-2 text-blue-2 mt-1">
            English <div className="w-1 h-1 bg-blue-2" /> 20 hours <div className="w-1 h-1 bg-blue-2" /> Beginner
          </div>
        </div>
        <div className="flex gap-x-2">
          {['Web design', 'Design'].map(tag => (
            <Tag className="text-sm font-normal leading-4 text-blue" title={tag} />
          ))}
        </div>
      </div>
    </div>
  </div>
)
