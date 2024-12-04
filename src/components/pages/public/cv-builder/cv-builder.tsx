import {useState} from 'react'
import {Builder, StepCard, Uploader} from './components'
import {Breadcrumb} from '@/components/common'
import {STEPS} from './constants/steps'
import {StepValue} from './types'

export const CVBuilderPage = () => {
  const [nextStep, setNextStep] = useState<StepValue>()

  if (nextStep === 'upload') {
    return <Uploader stepBack={() => setNextStep(undefined)} />
  }

  if (nextStep === 'build') {
    return <Builder stepBack={() => setNextStep(undefined)} />
  }

  return (
    <div className="container mx-auto pt-8 pb-28">
      <Breadcrumb
        links={[
          {
            label: 'Home',
            path: '/',
          },
          {
            label: 'CV builder',
          },
        ]}
      />
      <div className="mt-10 mb-14">
        <h1 className="text-4xl md:text-8xl leading-7 lg:leading-17 font-bold text-center">
          How do you want to start?
        </h1>
        <p className="text-sm md:text-2xl text-blue-2 leading-8.5 mt-3  text-center">
          Build a new resume or upload an existing file
        </p>
      </div>
      <div className="flex flex-col gap-8 max-w-[1000px] mx-auto">
        {STEPS.map(step => (
          <StepCard key={step.value} step={step} onClick={() => setNextStep(step.value)} />
        ))}
      </div>
    </div>
  )
}
