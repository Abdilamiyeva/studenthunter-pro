import {Image} from '@/components/common'

export const LicencesCertifications = () => (
  <section id="licences-certifications" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 sm:mb-2">Licenses & Certifications</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        {[...new Array(2)].map((_, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start gap-3 pt-5">
            <Image
              src="/images/demo-company.svg"
              alt="Demo university"
              imageClassName="min-w-[62px] min-h-[62px] rounded-full"
            />
            <div>
              <h6 className="font-bold leading-6">IELTS</h6>
              <p className="text-blue-1 text-sm leading-5 mb-0.5">Score: 6.5</p>
              <p className="text-blue-2 text-xs leading-4 mb-1">Issued Sep 2022 - Expire Sep 2024</p>
              <button type="button" className="text-sky-1 text-sm font-bold leading-5 underline">
                IELTS score.pdf
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
