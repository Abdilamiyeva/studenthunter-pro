import {Button} from '@/components/common'
import {DownloadIcon} from '@/icons'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const Resume = ({user}: Props) => (
  <section id="resume" className="section mt-10 md:mt-20 bg-blue-7">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-1 mb-5">
        <h5 className="text-xl font-bold leading-7.5 mb-2 sm:mb-0">Resume</h5>
        {user.cv_file && (
          <a href={getImageURL(user.cv_file, 'pdfs')} download="resume.svg" className="w-full sm:w-auto">
            <Button
              theme="orange"
              icon={<DownloadIcon />}
              className="w-full bg-orange-6 border-orange-6 hover:bg-orange-6/90 hover:border-orange-6/90 py-2 sm:py-2.5 px-4 sm:px-7"
            >
              Download
            </Button>
          </a>
        )}
      </div>
      {user.cv_file ? (
        <a href={user.cv_file} download={`${user.first_name} ${user.last_name} - CV.pdf`}>
          {user.first_name} {user.last_name} - CV.pdf
        </a>
      ) : (
        <p className="text-center text-blue-2 my-5 text-xs">Resume not uploaded yet</p>
      )}
      {/*
        IMPLEMENT PDF VIEWER:
        <Image
          src="/images/demo-resume.svg"
          alt="Demo resume"
          className="!block max-w-[514px] h-[721px] mx-auto border border-blue-2"
          imageClassName="min-w-full min-h-full object-contain"
        />
      */}
    </div>
  </section>
)
