import {StepValue} from '../../types'

export interface Step {
  Icon: (props: IconProps) => JSX.Element
  name: string
  description: string
  value: StepValue
}
