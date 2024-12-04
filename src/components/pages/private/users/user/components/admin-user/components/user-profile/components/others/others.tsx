import dayjs from 'dayjs'
import {Props} from './types'

export const Others = ({user}: Props) => (
  <section id="others" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 mb-4 sm:mb-7">Others</h5>
      {user.other_certificates.length ? (
        <div className="flex flex-col gap-5 divide-y divide-blue-4">
          <div className="flex flex-col items-start">
            <h5 className="font-bold leading-6 mb-2">Certificates</h5>
            {user.other_certificates?.map(cert => (
              <a
                key={cert._id}
                href={cert.certificate_file}
                download={`${cert.certificate_name}.pdf`}
                className="text-sky-1 text-sm font-bold leading-5 underline mb-1"
              >
                {cert.certificate_name}.pdf
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-blue-2 my-5 text-xs">Nothing to show</p>
      )}
    </div>
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7 mt-10 sm:mt-20">
      <h5 className="text-xl font-bold leading-7.5 mb-4 sm:mb-7">Signature</h5>
      <div className="grid sm:grid-cols-2 gap-y-3">
        <div>
          <p className="text-blue-2 text-sm leading-5">Digital Signature</p>
          <p className="font-bold leading-6">{user.fullName || 'N/A'}</p>
        </div>
        <div>
          <p className="text-blue-2 text-sm leading-5">Date</p>
          <p className="font-bold leading-6">{dayjs(user.confirm_date).format('DD.MM.YYYY') || 'N/A'}</p>
        </div>
      </div>
    </div>
  </section>
)
