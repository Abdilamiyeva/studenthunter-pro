import {Image} from '@/components/common'

export const WorkExperience = () => (
  <section id="work-experience" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 sm:mb-2">Work Experience</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        {[...new Array(2)].map((_, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-3 pt-5">
            <Image
              src="/images/demo-company.svg"
              alt="Demo university"
              imageClassName="min-w-[62px] min-h-[62px] rounded-full"
            />
            <div className="flex flex-col items-start">
              <h6 className="font-bold leading-6">Senior UI/UX Designer</h6>
              <p className="text-blue-1 text-sm leading-5 mb-0.5">Tenx Group</p>
              <p className="text-blue-2 text-xs leading-4 mb-0.5">2022 - Present - 1 yrs 2 mo</p>
              <p className="text-blue-2 text-xs leading-4 mb-0.5">Termiz, Surkhandaryo</p>
              <ul className="mt-2.5 text-blue-1 text-xs leading-4.5 list-disc list-inside">
                <li>Completed several successful projects globally</li>
                <li>Designed a user- friendly, aesthetically pleasing website that increased user engagement by 45%</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
