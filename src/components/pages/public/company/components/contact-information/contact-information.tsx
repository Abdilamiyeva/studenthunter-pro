import {Display, MailIcon, TelephoneFrame} from '@/icons'
import {Props} from './types'
export const ContactInformation = ({company}: Props) => (
  <div className="py-[30px] px-7 w-full rounded-2xl overflow-hidden border border-blue-4">
    <h2 className="text-base text-blue font-bold">Contact Information</h2>
    <ul className="flex mt-[19px] flex-col">
      <li>
        <a
          href={`https://mail.google.com/mail/?view=cm&source=mailto&to=${company.email}`}
          target="_blank"
          className="flex gap-x-4 items-center"
        >
          <div className="flex gap-x-3 items-center">
            <div className="w-10 h-10 rounded-[10px] text-blue-2 bg-transparent flex justify-center items-center">
              <MailIcon className="w-4 h-4" />
            </div>
            <p className="text-blue-2 font-normal leading-5 text-sm">{company.email || '-'}</p>
          </div>
        </a>
      </li>
      <li>
        <a href={`tel:${company.phone_number}`} target="_blank" className="flex gap-x-4 items-center">
          <div className="flex gap-x-3 items-center">
            <div className="w-10 h-10 rounded-[10px] text-blue-2 bg-transparent flex justify-center items-center">
              <TelephoneFrame className="w-4 h-4" />
            </div>
            <p className="text-blue-2 font-normal leading-5 text-sm">{company.phone_number || '-'}</p>
          </div>
        </a>
      </li>
      <li>
        <a href={company?.website} target="_blank" className="flex gap-x-4 items-center">
          <div className="flex gap-x-3 items-center">
            <div className="w-10 h-10 rounded-[10px] text-blue-2 bg-transparent flex justify-center items-center">
              <Display className="mt-1 w-[20px] ml-1 h-[20px]" />
            </div>
            <p className="text-blue-2 font-normal leading-5 text-sm">{company.website || '-'}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
)
