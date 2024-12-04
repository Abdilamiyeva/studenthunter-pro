import {Image} from '@/components/common'

export const Education = () => (
  <section id="education" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 sm:mb-2">Education</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        {[...new Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start gap-3 pt-5">
            <Image
              src="/images/demo-company.svg"
              alt="Demo university"
              imageClassName="min-w-[62px] min-h-[62px] rounded-full"
            />
            <div>
              <h6 className="font-bold leading-6">The Interaction Design Foundation</h6>
              <p className="text-blue-1 text-sm leading-5 mb-0.5">Online UX design Courses for professionals</p>
              <p className="text-blue-2 text-xs leading-4 mb-2">2020 - 2023</p>
              <p className="text-blue-1 text-xs leading-4.5">
                The place to learn all different kind of both foundation and advanced courses by industry experts.
                Courses are Interaction Design for usability, UI Design pattern for successful software, Psychology of
                Ecommerce so on.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
