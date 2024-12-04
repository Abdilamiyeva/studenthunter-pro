import {Avatar} from '@/components/common'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const Achievements = ({user}: Props) => (
  <section id="achievements" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 sm:mb-2">Achievements</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        {user.achievements.length ? (
          user.achievements.map(achivement => (
            <div key={achivement._id} className="flex flex-col sm:flex-row items-start gap-3 pt-5">
              <Avatar
                src={achivement.image}
                fullName={achivement.recommender_name}
                imageClassName="min-w-[62px] min-h-[62px] rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="font-bold leading-6">{achivement.by_whom}</h6>
                <p className="text-blue-1 text-sm leading-5 mb-1">{achivement.recommender_name}</p>
                <a
                  href={getImageURL(achivement.recommendation_file, 'pdfs')}
                  download="achivement.pdf"
                  className="text-sky-1 text-sm font-bold leading-5 underline mb-0.5 text-center"
                >
                  achivement.pdf
                </a>
                <button type="button" className="text-sky-1 text-sm font-bold leading-5 underline">
                  Top student.pdf
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-blue-2 my-5 text-xs">No any achievement</p>
        )}
      </div>
    </div>
  </section>
)
