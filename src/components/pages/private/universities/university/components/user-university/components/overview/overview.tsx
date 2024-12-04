import {Button, Image} from '@/components/common'
import {BookmarkIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, TelegramIcon} from '@/icons'
import {cn} from '@/lib/utils'

export const Overview = () => {
  const getStatusBtnColor = (status: string) => {
    switch (status) {
      case 'applied':
        return 'bg-green-4 text-green'
      case 'in process':
        return 'bg-orange-11 text-orange-6'
      case 'cancelled':
        return 'bg-orange-10 text-orange'
    }
  }

  return (
    <section id="overview" className="section">
      <div>
        <div className="flex flex-col md:flex-row justify-between gap-y-4">
          <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-3">
            <div className="w-32 h-32 rounded-full border border-blue overflow-hidden">
              <Image className="h-full" imageClassName="h-full" src="/images/demo-company.svg" alt="Demo university" />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-blue text-xl font-semibold leading-8 mb-2">Hult International University</h1>
              <div className="flex flex-wrap gap-2">
                <Button
                  className="font-bold px-4 py-1 rounded text-sm gap-2"
                  icon={<MailIcon className="w-4 h-4" />}
                  variant="outline"
                  noSpaceBetweenIcon
                >
                  Message
                </Button>
                <Button
                  className="font-bold py-2 rounded px-4 text-sm gap-2"
                  icon={<BookmarkIcon className="w-4 h-4" />}
                  variant="outline"
                  noSpaceBetweenIcon
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <div className="flex gap-x-2">
              <a href="">
                <TelegramIcon className="w-6 h-6" />
              </a>
              <a href="">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="">
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 border border-blue-4 rounded-2xl py-3 px-5 sm:py-5 sm:px-8">
          <h2 className="text-blue text-xl font-bold leading-8">Program</h2>
        </div>
        <div className="mt-20 border border-blue-4 rounded-2xl py-3 px-5 sm:py-5 sm:px-8">
          <h2 className="text-blue text-xl font-bold leading-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 mt-4 sm:mt-6 gap-x-10">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-blue-2 text-sm leading-5">University name</p>
                <p className="font-bold leading-6">Hult International University</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Location</p>
                <p className="font-bold leading-6">Boston, Cambridge, United States</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Phone number</p>
                <p className="font-bold leading-6">+1 617-746-1990</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">University email</p>
                <p className="font-bold leading-6"> university@email.com</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Contact person name</p>
                <p className="font-bold leading-6">John Doe</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Contact person position</p>
                <p className="font-bold leading-6">HR Manager</p>
              </div>
              <div>
                <div className="flex gap-x-12">
                  <div className="flex flex-col">
                    <p className="text-blue-2 font-normal leading-5">Programs</p>
                    <h3 className="text-base font-bold leading-6 text-blue flex items-center gap-x-2">25</h3>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-blue-2 font-normal leading-5">Rating</p>
                    <h3 className="text-base font-bold leading-6 text-blue flex items-center gap-x-2"> =184</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-blue-2 text-sm leading-5">Status</p>
                <div className={cn('w-max px-9 py-1 font-bold rounded', getStatusBtnColor('applied'))}>Applied</div>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Study level</p>
                <p className="font-bold leading-6">Bachelor</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Preferred program</p>
                <p className="font-bold leading-6">Go for it!</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Tution fee</p>
                <p className="font-bold leading-6">$25k per year</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">University website</p>
                <p className="font-bold leading-6">university.com</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Universityname</p>
                <p className="font-bold leading-6">HultInterneationalUniversity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
