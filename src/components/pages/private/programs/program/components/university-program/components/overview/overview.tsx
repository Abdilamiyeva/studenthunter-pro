import {Button, Image} from '@/components/common'
import {EditIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, TelegramIcon} from '@/icons'

export const Overview = () => (
  <section id="overview">
    <div className="flex flex-col md:flex-row items-end justify-between gap-y-3">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-7 w-full">
        <Image src="/images/demo-company.svg" imageClassName="w-[120px] h-[120px] rounded-full" />
        <div className="flex items-center sm:items-start flex-col">
          <h5 className="text-xl font-semibold leading-7.5">Web design</h5>
          <p className="text-blue-1 text-sm leading-5 mb-1">Hult International University</p>
          <div className="flex items-center gap-2.5 text-blue-1 text-sm leading-5">
            <LocationIcon className="w-3.5 h-3.5" />
            <span>Boston, Cambridge, United States</span>
            <span className="text-orange-6">+5</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
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
    <div className="mt-5 border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <div className="flex items-center justify-between mb-6">
        <h5 className="text-xl font-bold leading-7.5">Overview</h5>
        <Button className="rounded px-7 h-8 py-1 text-sm" icon={<EditIcon className="w-3 h-3" />}>
          Edit
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">Study level</p>
            <p className="font-bold leading-6">Bachelor</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Duration</p>
            <p className="font-bold leading-6">4 year</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Tution Fee</p>
            <p className="font-bold leading-6">$12 - $65</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Main Subject</p>
            <p className="font-bold leading-6">Business Adminstration</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">Program</p>
            <p className="font-bold leading-6">Web design</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Format</p>
            <p className="font-bold leading-6">Full-time</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Attendance</p>
            <p className="font-bold leading-6">Online</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">University name</p>
            <p className="font-bold leading-6">Hult International University</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
