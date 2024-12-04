import {SubmitHandler, useForm} from 'react-hook-form'
import {usePDF} from 'react-to-pdf'
import {Breadcrumb, Button} from '@/components/common'
import {Education, Employment, Langs, PersonalDetails, Resume, Skills, SocialLinks, Summary} from './components'
import {Props, ResumeData} from './types'
import {Form} from '@/components/ui/form'
import {useState} from 'react'

export const Builder = ({stepBack}: Props) => {
  const [resumeData, setResumeData] = useState<'' | ResumeData>('')
  const form = useForm<ResumeData>({
    defaultValues: {
      employments: [],
      educations: [],
      socialLinks: [],
      skills: [],
      langs: [],
      summaryTitle: 'About ME',
    },
  })
  const {toPDF, targetRef} = usePDF({
    filename: 'resume.pdf',
  })

  const onSubmit: SubmitHandler<ResumeData> = formData => {
    setResumeData(formData)

    setTimeout(async () => {
      toPDF()
      setResumeData('')
    }, 500)
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
            onClick: stepBack,
          },
          {
            label: 'Create New',
          },
        ]}
      />
      <div className="w-[800px] mx-auto">
        <div ref={targetRef}>{resumeData ? <Resume resumeData={resumeData} /> : ''}</div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 mb-14 max-w-[1000px] mx-auto">
          <PersonalDetails form={form} />
          <Summary form={form} />
          <Employment form={form} />
          <Education form={form} />
          <SocialLinks form={form} />
          <Skills form={form} />
          <Langs form={form} />
          <Button className="mt-10 py-5 text-lg w-full">Create CV</Button>
        </form>
      </Form>
    </div>
  )
}
