/* eslint-disable no-console */
import {FormModal} from '@/components/common'
import {Props} from './types'
import {useFieldArray, useForm} from 'react-hook-form'
import {Form} from '@/components/ui/form'
import {XIcon} from '@/icons'
import {useState} from 'react'
import {SkillCard} from './components/skill-card'

export const EditForm = ({close, open}: Props) => {
  const form = useForm({
    defaultValues: {
      skills: [{skillName: ''}],
    },
  })
  const [skills, setSkills] = useState([
    'Interface Design',
    'Full time',
    'Freelance',
    'Adobe',
    'Photo editing',
    'Design',
    'Illustrator',
    'Social Media',
    'Photoshop',
  ])
  const {fields, append, remove} = useFieldArray({name: 'skills', control: form.control})

  const removeTag = (index: number) => {
    const currentSkills = [...skills]
    currentSkills.slice(index, 1)
    setSkills(currentSkills)
  }

  const appendElement = () => {
    append({
      skillName: '',
    })
  }

  return (
    <FormModal
      className="w-[785px]"
      open={open}
      close={close}
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(data => console.log(data))}>
          <Form {...form}>{content}</Form>
        </form>
      )}
    >
      <h2 className="text-blue text-xl font-bold leading-8 mb-7 ">Skills</h2>
      <div className="w-full flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="bg-blue-7 rounded px-[10px]  py-2 flex gap-x-1 text-blue-2">
            <p className="text-xs font-bold leading-4">{skill}</p>
            <button type="button" onClick={() => removeTag(index)}>
              <XIcon className="w-[10px] h-[10px]" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3">
        {fields.map((skill, index) => (
          <SkillCard key={skill.id} remove={() => remove(index)} form={form} index={index} />
        ))}
      </div>
      <div className="my-4">
        <button type="button" onClick={appendElement} className="text-blue-9  text-base font-bold leading-6">
          + Add more skill
        </button>
      </div>
    </FormModal>
  )
}
