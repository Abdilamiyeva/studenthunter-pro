import {FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from '@/icons'
import {Image} from '@/components/common'
import {EditButton} from '../edit-button'

export const Overview = () => (
  <section id="overview" className="section">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3">
      <div className="flex flex-col sm:flex-row items-center gap-x-8 gap-y-3 w-full sm:w-auto">
        <div className="w-32 h-32 rounded-full border border-blue overflow-hidden">
          <Image className="h-full" imageClassName="h-full" src="/images/demo-company.svg" alt="Demo company" />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-blue text-xl font-semibold leading-8">Graphic Designer</h1>
          <p>Google News!</p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end w-full sm:w-auto">
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
    <div className="mt-5 border border-blue-4 rounded-2xl py-3 px-5 sm:py-5 sm:px-8 ">
      <div className="flex justify-between mb-6">
        <h2 className="text-blue text-xl font-bold leading-8">Overview</h2>
        <EditButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">Job title</p>
            <p className="font-bold leading-6">Graphic Designer</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Company name</p>
            <p className="font-bold leading-6">Eliiasen group</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Specialities</p>
            <p className="font-bold leading-6">Arts & Illustration</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Salary</p>
            <p className="font-bold leading-6">$12 - $65 per year</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-blue-2 text-sm leading-5">Job Type</p>
            <p className="font-bold leading-6">Full Time</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Location</p>
            <p className="font-bold leading-6">California</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm leading-5">Experience level</p>
            <p className="font-bold leading-6">Junior</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
