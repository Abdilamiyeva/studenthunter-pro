import {Button, Dropdown, Image} from '@/components/common'
import {BookmarkIcon, CircleXIcon, DotsColIcon, EditIcon, ReportFlagIcon} from '@/icons'
import {Link} from 'react-router-dom'

export const Vacancies = () => {
  const additionalContent = (
    <div className="flex items-center gap-3 text-blue-2">
      <p className="text-sm leading-5">2m ago</p>
      <Dropdown
        buttons={[
          {
            label: 'Save',
            icon: <BookmarkIcon className="w-4 h-4" />,
          },
          {label: 'Not interested', icon: <CircleXIcon className="w-4 h-4" />},
          {label: 'Report job', icon: <ReportFlagIcon className="w-4 h-4" />},
        ]}
      >
        <button>
          <DotsColIcon className="w-4 h-4" />
        </button>
      </Dropdown>
    </div>
  )

  return (
    <section id="vacancies" className="section mt-10 md:mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-7.5">Vacancies</h5>
        <Button
          icon={<EditIcon className="w-3 h-3" />}
          className="w-full sm:w-auto px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
        >
          Edit
        </Button>
      </div>
      <div className="flex flex-col gap-10">
        {[...new Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-x-5 gap-y-3 border border-blue-4 hover:border-blue-2 duration-default rounded-2xl py-4 px-5"
          >
            <div className="flex items-center justify-between w-full sm:w-auto">
              <Image
                src="/images/demo-company.svg"
                alt="Demo company"
                imageClassName="min-w-[44px] min-h-[44px] rounded-full"
              />
              <div className="block sm:hidden">{additionalContent}</div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <h6 className="text-base font-bold leading-6 cursor-pointer">
                  <Link to="/jobs/job-id">Graphic Designer</Link>
                </h6>
                <div className="hidden sm:block">{additionalContent}</div>
              </div>
              <div className="flex items-center gap-2.5 text-sm leading-5 text-blue-2 mt-0.5 mb-2">
                <p>Full time</p>
                <div className="w-1 h-1 bg-blue-2" />
                <p>Eliassen Group</p>
              </div>
              <p className="text-sm text-blue-2 leading-5">
                We're looking for a detail oriented, results driven, Graphic Designer that thrives working in start-up
                environments and is well versed in providing creative support. The ideal candidate for this role has a
                track record of operating with a sense of urgency, exceling in ...
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {['Full time', 'Freelance', 'Adobe'].map((tag, idx) => (
                  <button
                    key={idx}
                    className="text-xs font-bold leading-4 text-blue-2 bg-blue-7 px-4 py-2 rounded-md hover:text-blue duration-default"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
