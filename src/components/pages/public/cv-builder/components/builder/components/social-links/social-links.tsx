import {useFieldArray} from 'react-hook-form'
import {Props} from './types'
import {SocialLinkCard} from './components'
import {cn} from '@/lib/utils'

export const SocialLinks = ({form}: Props) => {
  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: 'socialLinks',
  })

  const appendElement = () => {
    append({
      platformName: '',
      platformLink: '',
    })
  }

  return (
    <div className="mt-20">
      <h1 className="text- lg:text-6xl leading-14.5 font-bold">Websites & Socials</h1>
      <p className="mt-1 mb-7 text-blue-1 text-sm lg:text-xl leading-7.5">
        You can add links to websites you want hiring managers to see! Perhaps It will be a link to your portfolio,
        LinkedIn profile, or personal website
      </p>
      <div className="flex flex-col gap-3">
        {fields.map((socialLink, index) => (
          <SocialLinkCard key={socialLink.id} remove={() => remove(index)} form={form} index={index} />
        ))}
      </div>
      <button
        type="button"
        onClick={appendElement}
        className={cn('text-sky text-sm lg:text-xl font-bold leading-7.5', fields.length && 'mt-10')}
      >
        + Add one more link
      </button>
    </div>
  )
}
