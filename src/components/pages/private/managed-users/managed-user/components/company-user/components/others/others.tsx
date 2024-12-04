export const Others = () => (
  <section id="others" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 mb-4 sm:mb-7">Others</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        <div className="flex flex-col items-start">
          <h5 className="font-bold leading-6 mb-2">Recomendation Letter</h5>
          <button type="button" className="text-sky-1 text-sm font-bold leading-5 underline mb-1">
            Letter from teachers.pdf
          </button>
          <button type="button" className="text-sky-1 text-sm font-bold leading-5 underline mb-1">
            Letter from Trainer.pdf
          </button>
        </div>
        <div className="flex flex-col items-start pt-5">
          <h5 className="font-bold leading-6 mb-2">Motivation Letter</h5>
          <button type="button" className="text-sky-1 text-sm font-bold leading-5 underline mb-1">
            My goals in the future.pdf
          </button>
        </div>
      </div>
    </div>
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7 mt-10 sm:mt-20">
      <h5 className="text-xl font-bold leading-7.5 mb-4 sm:mb-7">Signature</h5>
      <div className="grid sm:grid-cols-2 gap-y-3">
        <div>
          <p className="text-blue-2 text-sm leading-5">Digital Signature</p>
          <p className="font-bold leading-6">Sevinch Axmedova</p>
        </div>
        <div>
          <p className="text-blue-2 text-sm leading-5">Date</p>
          <p className="font-bold leading-6">21.08.2023</p>
        </div>
      </div>
    </div>
  </section>
)
