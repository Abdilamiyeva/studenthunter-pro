import {EditButton} from '../edit-button'

export const AboutJob = () => (
  <section id="about" className="section border border-blue-4 my-10 sm:my-20 rounded-2xl py-4 px-5 sm:py-6 sm:px-8">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
      <h1 className="text-blue text-xl font-bold leading-7 mb-2 sm:mb-0">About job</h1>
      <EditButton />
    </div>
    <p className="my-4 text-blue-1 text-sm font-normal leading-normal">
      We're looking for a detail oriented, results driven, Graphic Designer that thrives working in start-up
      environments and is well versed in providing creative support. The ideal candidate for this role has a track
      record of operating with a sense of urgency, genetic information, marital status, medical condition, national
      origin, physical or mental disability, political affiliation, protected veteran status, race, religion, sex
      (including pregnancy), sexual orientation, or any other characteristic protected by applicable laws, regulations
      and ordinances. All qualified applicants will receive consideration for employment.
    </p>
    <p className="text-blue text-sm font-bold leading-5">Responsibilites:</p>
    <ul className="text-sm text-blue-1 list-disc pl-4 mb-6">
      <li>Deliver the project or solution as per the baseline scope, cost & schedule.</li>
      <li>Maintain high team & customer satisfaction levels.</li>
      <li>Ensure high quality delivery without any escalations.</li>
    </ul>
    <button className="text-sm font-bold leading-5 text-orange-6 flex items-center gap-1.5 group hover:text-orange-6/80 duration-default">
      <span className="flex items-center gap-0.5">
        {[...new Array(3)].map((_, index) => (
          <span
            key={index}
            className="block w-1 h-1 rounded-full bg-orange-6 group-hover:bg-orange-6/80 duration-default"
          />
        ))}
      </span>
      <span>See more</span>
    </button>
  </section>
)
