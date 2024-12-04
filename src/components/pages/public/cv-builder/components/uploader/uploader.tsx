import {Breadcrumb, Button} from '@/components/common'
import {Props} from './types'

export const Uploader = ({stepBack}: Props) => (
  <div className="container mx-auto pt-8 pb-28">
    <Breadcrumb
      links={[
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'CV builder',
          onClick: stepBack,
        },
        {
          label: 'Upload',
        },
      ]}
    />
    <div className="mt-10 mb-14">
      <h1 className="text-8xl leading-17 font-bold text-center">Coming soon...</h1>
      <p className="text-2xl text-blue-2 leading-8.5 mt-3 mb-6 text-center">Upload CV feature is coming soon...</p>
      <Button onClick={stepBack} className="w-max mx-auto px-14 py-3 text-xl">
        Go Back
      </Button>
    </div>
  </div>
)
