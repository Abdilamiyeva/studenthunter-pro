import {Image} from '@/components/common'
import {Link} from './components'
import {Contacts} from '@/constants/contacts'
import {FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from '@/icons'

export const Footer = () => (
  <footer className="bg-blue-5">
    <div className="md:container">
      <div className="md:flex md:gap-y-4 md:gap-x-0 md:flex-wrap md:justify-between gap-x-2 gap-y-7 md:py-20 grid grid-cols-2">
        <div className="md:w-auto">
          <div className="flex items-center gap-3 md:mb-5 mb-3">
            <Image src="/images/logo.svg" alt="Student Hunter" />
            <h4 className="text-blue leading-10 md:text-4xl font-semibold whitespace-nowrap">Student Hunter</h4>
          </div>
          <p className="text-xs md:text-sm font-normal leading-6 text-blue-1 md:max-w-[284px]">
            Apply to college for the first time or transfer to complete your degree. Navigate your entire college
            application journey with Student Hunter.
          </p>
        </div>
        <div className="md:w-auto pl-6">
          <h4 className="text-blue md:text-4xl md:font-semibold font-bold md:mb-6 mb-3">About us</h4>
          <div className="flex flex-col gap-2 leading:4.5 md:leading-6.5 text-xs md:text-base">
            <Link path="/story">Our story</Link>
            <Link path="/blogs">Blog</Link>
            <Link path="/help">Help</Link>
            <Link path="/faq">FAQs</Link>
          </div>
        </div>
        <div className="md:w-auto col-span-2">
          <h4 className="text-blue md:text-4xl md:font-semibold font-bold md:mb-6 mb-3">Features</h4>
          <div className="flex flex-col gap-2 md:leading-6.5 md:text-base leading-4.5 text-xs">
            <Link path="/universities">Universities</Link>
            <Link path="/vacancies">Vacancies</Link>
            <Link path="/application-guide">Application guide</Link>
            <Link path="/cv-builder">CV builder</Link>
            <Link path="/become-a-member">Become a member</Link>
          </div>
        </div>
        <div className="md:w-auto">
          <h4 className="text-blue md:text-4xl md:font-semibold md:mb-6 font-bold mb-3">Contact us</h4>
          <div className="flex flex-col gap-2 md:leading-6.5 md:text-base leading-4.5 text-xs md:mb-0 mb-8">
            <a href={`mailto:${Contacts.EMAIL}`} className="text-blue-1 leading-6.5">
              {Contacts.EMAIL}
            </a>
            <a href={`mailto:${Contacts.PHONE_NUMBER}`} className="text-blue-1 leading-6.5">
              {Contacts.PHONE_NUMBER}
            </a>
            <div className="flex items-center gap-3 mt-2.5">
              <a href={Contacts.TELEGRAM}>
                <TelegramIcon className="w-6 h-6" />
              </a>
              <a href={Contacts.INSTAGRAM}>
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href={Contacts.LINKEDIN}>
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href={Contacts.FACEBOOK}>
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[70px] md:flex-row flex-col-reverse md:items-center md:gap-16 leading-4.5 md:leading-normal md:text-base text-xs md:border-t md:border-blue-2 md:py-5">
        <p>Copyright © 2020 - {new Date().getFullYear()}</p>
        <div className="flex md:flex-row flex-col md:items-center md:gap-8 leading-4.5 md:leading-normal">
          <Link path="/terms-of-use">Term of use</Link>
          <Link path="/privacy-policy">Privacy policy</Link>
          <Link path="/support">Support</Link>
        </div>
      </div>
    </div>
  </footer>
)
