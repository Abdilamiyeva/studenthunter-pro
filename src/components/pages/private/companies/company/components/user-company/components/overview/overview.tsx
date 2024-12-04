import {Button, Image} from '@/components/common'
import {BookmarkFillIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, TelegramIcon} from '@/icons'

export const Overview = () => (
  <section id="overview" className="section">
    <div className="flex flex-col sm:flex-row items-center gap-x-8">
      <Image
        src="/images/demo-company.svg"
        alt="Demo company"
        imageClassName="min-w-[120px] min-h-[120px] rounded-full"
      />
      <div className="w-full mt-3 sm:mt-6">
        <h4 className="text-xl font-semibold leading-7.5 mb-2">Eliase group</h4>
        <div className="flex flex-col sm:flex-row items-center gap-y-3 gap-x-2 sm:gap-x-3 sm:w-max">
          <Button
            variant="outline"
            icon={<MailIcon className="w-4 h-4" />}
            className="text-sm font-bold leading-5 px-4 py-2 rounded flex items-center w-full sm:w-max mx-auto"
          >
            Message
          </Button>
          <Button
            variant="outline"
            icon={<BookmarkFillIcon className="w-4 h-4 fill-blue" />}
            className="text-sm font-bold leading-5 px-4 py-2 rounded flex items-center w-full sm:w-max mx-auto"
          >
            Saved
          </Button>
          <Button className="text-sm font-bold leading-5 px-9 py-2 rounded w-full sm:w-max">Apply</Button>
        </div>
        <div className="flex items-center justify-end gap-2 mt-3 md:mt-0">
          <a target="_blank" href="https://t.me">
            <TelegramIcon className="w-6 h-6" />
          </a>
          <a target="_blank" href="https://instagram.com">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a target="_blank" href="https://linkedin.com">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a target="_blank" href="https://facebook.com">
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7 mt-5">
      <h5 className="text-xl font-bold leading-7.5 mb-4 sm:mb-7">Overview</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">Company name</p>
            <p className="font-bold leading-6">Eliase group</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Location</p>
            <p className="font-bold leading-6">Boston, Cambridge, United States</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Contact person name</p>
            <p className="font-bold leading-6">Shamsiddin</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Contact person position</p>
            <p className="font-bold leading-6">HR Manager</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">Company email</p>
            <p className="font-bold leading-6">ealisengroup@gmail.com</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Company website</p>
            <p className="font-bold leading-6">www.ealisengroup.com</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Telephone number</p>
            <p className="font-bold leading-6">+1 617-746-1990</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Tax number</p>
            <p className="font-bold leading-6">1234567890</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
