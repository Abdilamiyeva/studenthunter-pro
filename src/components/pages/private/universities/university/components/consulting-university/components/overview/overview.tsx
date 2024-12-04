import {Button, Image} from '@/components/common'
import {FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from '@/icons'

export const Overview = () => (
  <section id="overview" className="section">
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-3">
          <div className="w-32 h-32 rounded-full border border-blue overflow-hidden">
            <Image className="h-full" imageClassName="h-full" src="/images/demo-company.svg" alt="Demo company" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-blue text-xl font-semibold leading-8">Hult International University</h1>
            <Button className="bg-green border-green hover:bg-green/90 rounded px-3 py-0.5 text-sm font-medium leading-5">
              Active
            </Button>
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
      <div className="mt-5 border border-blue-4 rounded-2xl py-3 px-5 sm:py-5 sm:px-8">
        <h2 className="text-blue text-xl font-bold leading-8">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 mt-5 sm:mt-7">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">University name</p>
              <p className="font-bold leading-6">Hult Interneational University</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Location</p>
              <p className="font-bold leading-6">Boston, Cambridge, United States</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Study level</p>
              <div className="flex flex-wrap items-center gap-2 font-bold leading-6">
                <span>Bachelor</span>
                <div className="w-1 h-1 bg-blue" />
                <span>Masters</span>
                <div className="w-1 h-1 bg-blue" />
                <span>MBA</span>
                <div className="w-1 h-1 bg-blue" />
                <span>PHD</span>
              </div>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Tution Fee</p>
              <p className="font-bold leading-6">$12 - $65</p>
            </div>
            <div className="flex items-center gap-14">
              <div>
                <p className="text-blue-2 text-sm leading-5">Programms</p>
                <p className="font-bold leading-6">25</p>
              </div>
              <div>
                <p className="text-blue-2 text-sm leading-5">Rating</p>
                <p className="font-bold leading-6">=184</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-2 text-sm leading-5">Applications</p>
              <div className="bg-green px-4 py-1 rounded text-sm font-bold leading-3.5 text-white w-max">+1450</div>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">Telephone number</p>
              <p className="font-bold leading-6">+1 617-746-1990</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">University email</p>
              <p className="font-bold leading-6">hultadmission@gmail.com</p>
            </div>
            <div>
              <p className="text-blue-2 text-sm leading-5">University vebsite</p>
              <a href="#" className="font-bold leading-6 text-sky-1 hover:text-sky-1/80 duration-default underline">
                www.hult.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
