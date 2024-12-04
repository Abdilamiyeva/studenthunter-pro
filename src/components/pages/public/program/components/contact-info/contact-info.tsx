import {FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from '@/icons'
import {Props} from './types'

export const ContactInfo = ({program}: Props) => (
  <div className="w-full py-8 pl-7">
    <h2 className="text-blue text-base text-bold leading-relaxed">Follow {program.university_id?.title}</h2>
    <div className="flex my-4 gap-x-3">
      <button
        onClick={() => open(program.university_id.socials?.telegram)}
        className="text-blue-2 transition-all hover:text-blue"
      >
        <TelegramIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => open(program.university_id.socials?.instagram)}
        className="text-blue-2 transition-all hover:text-blue"
      >
        <InstagramIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => open(program.university_id.socials?.linkedin)}
        className="text-blue-2 transition-all hover:text-blue"
      >
        <LinkedinIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => open(program.university_id.socials?.facebook)}
        className="text-blue-2 transition-all hover:text-blue"
      >
        <FacebookIcon className="w-6 h-6" />
      </button>
    </div>
  </div>
)
