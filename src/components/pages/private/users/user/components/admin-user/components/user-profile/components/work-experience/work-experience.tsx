import {Avatar} from '@/components/common'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'
import dayjs from 'dayjs'
import {calcDuration} from '@/utils/calc-duration'
import MDEditor from '@uiw/react-md-editor'

export const WorkExperience = ({user}: Props) => (
  <section id="work-experience" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 sm:mb-2">Work Experience</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        {user.experience.length ? (
          user.experience.map(experience => (
            <div key={experience._id} className="flex flex-col md:flex-row items-start gap-3 pt-5">
              <Avatar
                src={getImageURL(experience.image)}
                fullName="Demo university"
                imageClassName="min-w-[62px] min-h-[62px] rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="font-bold leading-6">{experience.position}</h6>
                <p className="text-blue-1 text-sm leading-5 mb-0.5">{experience.company_name}</p>
                <p className="text-blue-2 text-xs leading-4 mb-0.5">
                  {dayjs(experience.start_year).format('YYYY')} -{' '}
                  {isNaN(new Date(experience.end_year).getTime()) ? experience.end_year : ''} -{' '}
                  {calcDuration(
                    experience.start_year,
                    experience.end_year,
                    experience.start_month,
                    experience.end_month,
                  )}
                </p>
                <p className="text-blue-2 text-xs leading-4 mb-0.5">{experience.location}</p>
                <div>
                  <MDEditor.Markdown source={experience.description} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-blue-2 my-5 text-xs">No any experience</p>
        )}
      </div>
    </div>
  </section>
)
