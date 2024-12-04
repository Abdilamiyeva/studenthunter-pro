import {Button, Image} from '@/components/common'
import {EditIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from '@/icons'

export const Overview = () => (
  <section id="overview" className="section">
    <div className="flex flex-col sm:flex-row justify-between gap-y-5">
      <div className="flex flex-col sm:flex-row items-center gap-x-7 gap-y-3">
        <Image src="/images/demo-company.svg" imageClassName="w-[120px] h-[120px] rounded-full" />
        <div>
          <p className="text-xl font-semibold leading-7.5 mb-0.5">World uz</p>
          <div className="bg-green text-white text-sm font-medium leading-5 px-3 py-0.5 rounded">7 colleges</div>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between">
        <Button
          icon={<EditIcon className="w-3 h-3" />}
          className="px-7 py-1.5 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
        >
          Edit
        </Button>
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
    </div>
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-1">
        <h5 className="text-xl font-bold leading-7.5">Overview</h5>
        <Button
          icon={<EditIcon className="w-3 h-3" />}
          className="w-full sm:w-auto px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
        >
          Edit
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">Consulting name</p>
            <p className="font-bold leading-6">World Uz</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Telephone number</p>
            <p className="font-bold leading-6">+1 617-746-1990</p>
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
            <p className="text-blue-2 text-sm leading-5">Consulting email</p>
            <p className="font-bold leading-6">worlduzgroup@gmail.com</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Consulting website</p>
            <p className="font-bold leading-6">www.worlduz.com</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Cost of service</p>
            <p className="font-bold leading-6">$1200</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
