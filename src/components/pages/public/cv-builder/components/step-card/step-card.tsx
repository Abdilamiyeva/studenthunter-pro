import {Props} from './types'

export const StepCard = ({step, onClick}: Props) => (
  <button
    onClick={onClick}
    className="flex flex-col lg:flex-row items-center gap-12 bg-blue-7 py-14 px-12 rounded-2xl hover:bg-blue hover:text-white duration-default"
  >
    <step.Icon className="w-16 h-16" />
    <span className="flex flex-col lg:items-start gap-2">
      <span className="text-xl lg:text-4xl leading-10 font-bold">{step.name}</span>
      <span className="text-sm lg:text-xl leading-7.5">{step.description}</span>
    </span>
  </button>
)
