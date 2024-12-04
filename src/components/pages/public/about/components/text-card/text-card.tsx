import {Props} from './types'

export const TextCard = ({description, headingText}: Props) => (
  <div className="w-full">
    <h2 className=" text-blue text-5xl md:text-7xl font-bold leading-[50px">{headingText}</h2>
    <p className="text-blue-2 text-xl md:text-2xl font-normal leading-[34px] mt-6">{description}</p>
  </div>
)
