import {Avatar} from '@/components/common'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const Education = ({user}: Props) => (
  <section id="education" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 sm:mb-2">Education</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        {user.educations.length ? (
          user.educations.map(education => (
            <div key={education._id} className="flex flex-col sm:flex-row items-start gap-3 pt-5">
              <Avatar
                src={getImageURL(education.image)}
                fullName={education.field_name}
                imageClassName="min-w-[62px] min-h-[62px] rounded-full"
              />
              <div>
                <h6 className="font-bold leading-6"></h6>
                <p className="text-blue-1 text-sm leading-5 mb-0.5">{education.field_name}</p>
                <p className="text-blue-2 text-xs leading-4 mb-2">
                  {education.start_year} - {education.end_year}
                </p>
                <p className="text-blue-1 text-xs leading-4.5">{education.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-blue-2 my-5 text-xs">No any educations</p>
        )}
      </div>
    </div>
  </section>
)
