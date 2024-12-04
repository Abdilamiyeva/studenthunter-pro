import {ProgramCard} from './components'
import {PROGRAMS} from './mock/programs'

export const Programs = () => (
  <section id="programs" className="bg-blue-5 py-8 md:py-20">
    <div className="px-4 md:container mx-auto">
      <h2 className="text-4xl md:text-6xl leading-9 md:leading-17 font-bold text-center">Explore popular programs</h2>
      <div className="grid  grid-cols-1 md:grid-cols-3 place-items-stretch lg:grid-cols-5 gap-2.5 md:gap-6 mt-8 md:mt-14">
        {PROGRAMS.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
  </section>
)
