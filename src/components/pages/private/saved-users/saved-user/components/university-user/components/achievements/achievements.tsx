import {Image} from '@/components/common'

export const Achievements = () => (
  <section id="achievements" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 sm:mb-2">Achievements</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        {[...new Array(2)].map((_, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start gap-3 pt-5">
            <Image
              src="/images/demo-company.svg"
              alt="Demo university"
              imageClassName="min-w-[62px] min-h-[62px] rounded-full"
            />
            <div className="flex flex-col items-start">
              <h6 className="font-bold leading-6">Student of the Year</h6>
              <p className="text-blue-1 text-sm leading-5 mb-1">Sejong University</p>
              <button
                type="button"
                className="text-sky-1 text-sm font-bold leading-5 underline mb-0.5 text-center text-start"
              >
                University best students.pdf
              </button>
              <button type="button" className="text-sky-1 text-sm font-bold leading-5 underline">
                Top student.pdf
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
