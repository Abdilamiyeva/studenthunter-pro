import {Breadcrumb} from '@/components/common/breadcrumb'
import {BreadcrumbData} from './constants/contact'
import {Button, Input} from '@/components/common'
import {TextArea} from '@/components/common/text-area/text-area'

export const ContactPage = () => (
  <div className="w-full py-8">
    <div className="container">
      <Breadcrumb links={BreadcrumbData} />
      <div className="my-10">
        <h1 className="text-6xl leading-[60px] md:text-8xl text-center text-blue font-bold">
          Got questions? Ask us anything
        </h1>
        <p className="text-blue-2 text-center leading-[34px] font-normal mt-3 text-xl md:text-2xl">
          Feel free to get in touch. We’ll get back within 24 hours.
        </p>
      </div>
      <form action="#" className="mb-16">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2  md:gap-x-7">
          <Input
            label="Name"
            placeholder="Enter your name"
            className=" text-blue-1  font-bold leading-normal"
            baseClassName="my-2 h-[60px] text-5 shadow-none placeholder:!font-normal"
          />
          <Input
            label="Surname"
            placeholder="Enter your surname"
            className="text-blue-1 font-bold leading-normal"
            baseClassName="my-2 text-5 h-[60px]  shadow-none placeholder:!font-normal"
          />
        </div>
        <div className="mt-[30px]">
          <TextArea
            className="text-blue-1 font-bold leading-normal "
            baseClassName="h-80 text-5 shadow-none my-2"
            label="Message"
            placeholder="Enter your message"
          />
        </div>
        <Button className="px-[74px] text-2xl font-normal py-3 mt-[30px]">Submit</Button>
      </form>
    </div>
  </div>
)
