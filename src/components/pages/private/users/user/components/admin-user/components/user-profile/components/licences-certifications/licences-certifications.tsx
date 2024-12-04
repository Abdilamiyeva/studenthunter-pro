import {Avatar} from '@/components/common'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'
import dayjs from 'dayjs'

export const LicencesCertifications = ({user}: Props) => (
  <section id="licences-certifications" className="section mt-10 md:mt-20">
    <div className="border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <h5 className="text-xl font-bold leading-7.5 sm:mb-2">Licenses & Certifications</h5>
      <div className="flex flex-col gap-5 divide-y divide-blue-4">
        {user.educations.length ? (
          user.certificates.map(cert => (
            <div key={cert._id} className="flex flex-col sm:flex-row items-start gap-3 pt-5">
              <Avatar
                src={getImageURL(cert.image)}
                fullName={cert.certificate_name}
                imageClassName="min-w-[62px] min-h-[62px] rounded-full"
              />
              <div>
                <h6 className="font-bold leading-6">{cert.certificate_name}</h6>
                <p className="text-blue-1 text-sm leading-5 mb-0.5">Score: {cert.certificate_score}</p>
                <p className="text-blue-2 text-xs leading-4 mb-1">
                  Issued {cert.issued_date ? dayjs(cert.issued_date).format('MMM YYYY') : 'N/A'} - Expire{' '}
                  {cert.expire_date ? dayjs(cert.expire_date).format('MMM YYYY') : 'N/A'}
                </p>
                <a
                  href={getImageURL(cert.certificate_file, 'pdfs')}
                  download="score.pdf"
                  className="text-sky-1 text-sm font-bold leading-5 underline"
                >
                  IELTS score.pdf
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-blue-2 my-5 text-xs">No any certificates</p>
        )}
      </div>
    </div>
  </section>
)
