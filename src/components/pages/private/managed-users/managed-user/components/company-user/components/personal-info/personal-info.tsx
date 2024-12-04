import {Button, Image} from '@/components/common'
import {FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, TelegramIcon, UserManageIcon} from '@/icons'

export const PersonalInfo = () => (
  <section id="personal-info" className="section">
    <div className="flex flex-col sm:flex-row items-stretch justify-between gap-y-4">
      <div className="flex flex-col sm:flex-row items-center gap-7">
        <Image
          src="/images/demo-user.svg"
          alt="Demo user"
          imageClassName="min-w-[120px] min-h-[120px] rounded-full border border-blue"
        />
        <div className="flex flex-col w-full">
          <h4 className="text-xl font-semibold leading-7.5">Axmedova Sevinch</h4>
          <p className="text-blue-1 text-sm leading-5">+998 99 912 34 65</p>
          <div className="flex gap-5 mt-4 w-max">
            <div className="relative text-sm font-semibold text-white leading-5 px-3 py-0.5 rounded-sm w-max mx-auto bg-green">
              Active
            </div>
            <Button
              variant="outline"
              icon={<MailIcon className="w-4 h-4" />}
              className="px-2 py-0.5 text-sm font-medium leading-5 rounded"
            >
              &nbsp;Message
            </Button>
          </div>
        </div>
      </div>
      <div className="min-h-full flex sm:flex-col items-end justify-between">
        <Button
          icon={<UserManageIcon className="w-3.5 h-3.5" />}
          className="text-xs font-semibold leading-6 py-0 px-2.5 rounded"
        >
          Manage
        </Button>
        <div className="flex gap-2">
          <TelegramIcon className="w-6 h-6" />
          <InstagramIcon className="w-6 h-6" />
          <LinkedinIcon className="w-6 h-6" />
          <FacebookIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
    <div className="mt-5 border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 mb-4 sm:mb-7">Personal info</h5>
      <div className="grid sm:grid-cols-2 gap-y-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">First name</p>
            <p className="font-bold leading-6">Sevinch</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Last name</p>
            <p className="font-bold leading-6 break-all">Axmedova</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Gender</p>
            <p className="font-bold leading-6 break-all">Female</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Country</p>
            <p className="font-bold leading-6 break-all">Uzbekistan</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">City</p>
            <p className="font-bold leading-6 break-all">Termiz</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Street address</p>
            <p className="font-bold leading-6 break-all">Sh.Rashidov streed</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">Mobile number</p>
            <p className="font-bold leading-6 break-all">+998 99 912 34 65</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Emergency contact (parents)</p>
            <p className="font-bold leading-6 break-all">+998 90 243 09 89</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Date of birth</p>
            <p className="font-bold leading-6 break-all">18.08.2005</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Email address</p>
            <p className="font-bold leading-6 break-all">axmedovasevinch05@gmail.com</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">IELTS Score</p>
            <p className="font-bold leading-6 break-all">B1</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Zipcode</p>
            <p className="font-bold leading-6 break-all">1234567890</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
