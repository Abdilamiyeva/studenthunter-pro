import {FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from '@/icons'
import {Props} from './types'

export const ContactInfo = ({contact}: Props) => (
  <div className="w-full md:py-8 md:pl-7 px-4 py-4">
    <h2 className="text-blue text-base font-bold leading-relaxed">Follow Hult University</h2>
    <div className="flex my-4 gap-x-3 text-blue-2">
      <button className="hover:text-blue" onClick={() => window.open(contact?.socials?.telegram)}>
        <TelegramIcon className="w-6 h-6" />
      </button>
      <button className="hover:text-blue" onClick={() => window.open(contact?.socials?.instagram)}>
        <InstagramIcon className="w-6 h-6" />
      </button>
      <button className="hover:text-blue" onClick={() => window.open(contact?.socials?.linkedin)}>
        <LinkedinIcon className="w-6 h-6" />
      </button>
      <button className="hover:text-blue" onClick={() => window.open(contact?.socials?.facebook)}>
        <FacebookIcon className="w-6 h-6" />
      </button>
    </div>
  </div>
)
