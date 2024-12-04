import {Image} from '@/components/common'

export const PassportInfo = () => (
  <section id="passport-info" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 mb-4 sm:mb-7">Passport Info</h5>
      <div className="grid md:grid-cols-2 gap-5 md:gap-11 sm:mt-7">
        <div>
          <p className="mb-2 text-blue-2 text-sm leading-5">Front side of ID card</p>
          <Image
            src="/images/demo-passport-front.svg"
            alt="Demo passport front"
            className="w-full mx-auto min-w-full h-44 rounded-2xl overflow-hidden"
            imageClassName="w-full h-full object-contain"
          />
        </div>
        <div>
          <p className="mb-2 text-blue-2 text-sm leading-5">Back side of ID card</p>
          <Image
            src="/images/demo-passport-back.svg"
            alt="Demo passport back"
            className="w-full mx-auto min-w-full h-44 rounded-2xl overflow-hidden"
            imageClassName="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-y-4">
        <div>
          <p className="text-blue-2 text-sm leading-5">Passport number</p>
          <p className="font-bold leading-6">AC 1234567</p>
        </div>
        <div>
          <p className="text-blue-2 text-sm leading-5">JSHSHIR</p>
          <p className="font-bold leading-6">12345678901234</p>
        </div>
        <div>
          <p className="text-blue-2 text-sm leading-5">Given by whom</p>
          <p className="font-bold leading-6">Surkhandarya</p>
        </div>
      </div>
    </div>
  </section>
)
