/* eslint-disable react-hooks/exhaustive-deps */
import {LocationIcon, MailIcon, TelephoneFrame} from '@/icons'
import {Props} from './types'
import {useEffect, useState} from 'react'
import dayjs from 'dayjs'
import parse from 'html-react-parser'

export const Resume = ({resumeData}: Props) => {
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    if (resumeData) {
      if (resumeData?.userImage) {
        if (imageURL) {
          URL.revokeObjectURL(imageURL)
        }

        setImageURL(URL.createObjectURL(resumeData?.userImage))
      }
    }
  }, [resumeData])

  useEffect(
    () => () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL)
      }
    },
    [],
  )

  if (!resumeData) {
    return ''
  }

  return (
    <div className="flex h-auto my-[50px]">
      <div className="min-w-[280px] bg-blue text-blue-5">
        <div className="w-full h-[280px]">
          <img src={imageURL} alt={resumeData.firstName + ' ' + resumeData.lastName} className="w-full h-full" />
        </div>
        <div className="px-[25px]">
          <div className="py-[25px] border-b-2">
            <div className="mb-5">
              <p className="text-xl font-bold uppercase text-blue-5">
                {resumeData.firstName + ' ' + resumeData.lastName}
              </p>
              <p className="font-normal text-blue-4">{resumeData.profession}</p>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full grid place-content-center bg-sky">
                  <LocationIcon />
                </div>
                <div>
                  {resumeData.address} | {resumeData.country}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full grid place-content-center bg-sky">
                  <TelephoneFrame />
                </div>
                <div className="data">{resumeData.phoneNumber}</div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full grid place-content-center bg-sky">
                  <MailIcon />
                </div>
                <div className="data">{resumeData.email}</div>
              </li>
            </ul>
          </div>
          {resumeData.skills.length ? (
            <div className="py-[25px] border-b-2">
              <h3 className="mb-3 text-xl font-bold uppercase text-blue-5">SKILL'S</h3>
              <ul className="flex flex-col gap-2 font-medium">
                {resumeData.skills.map((skill: any, index: number) => (
                  <li key={index}>{skill.skillName}</li>
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}
          {resumeData.socialLinks.length ? (
            <div className="py-[25px]">
              <h3 className="text-xl font-bold uppercase mb-3 text-blue-5">Social</h3>
              <ul className="flex flex-col gap-2">
                {resumeData.socialLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <p className="font-bold">{link.platformName}</p>
                    <a href={link.platformLink} target="_blank" className="text-blue-400 underline cursor-pointer">
                      {link.platformLink}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="w-[520px] bg-white px-7 py-3">
        <div className="mb-7">
          <h3 className="text-3xl font-bold uppercase mb-1">{resumeData.summaryTitle}</h3>
          <div className="prose prose-ul:list-inside prose-ul:!list-disc">{parse(resumeData.summary || '')}</div>
        </div>
        {resumeData.employments.length ? (
          <div className="mb-7">
            <h3 className="text-3xl font-bold uppercase mb-1">WORK EXPERIENCE</h3>
            <ul className="flex flex-col gap-3">
              {resumeData.employments.map((employment: any, index: number) => (
                <li key={index}>
                  <div className="flex items-center gap-2 text-lg font-bold">
                    <span>
                      {employment.profession} at {employment.companyName}
                    </span>
                    <div className="flex items-center gap-1">
                      | <LocationIcon className="w-4 h-4" />
                      <span>{employment.city}</span>
                    </div>
                  </div>
                  <p>
                    {dayjs(employment.dates.start).format('MMM YY')} - {dayjs(employment.dates.end).format('MMM YY')}
                  </p>
                  <div className="ml-7 mt-2 prose prose-ul:list-inside prose-ul:!list-disc">
                    {parse(employment.description || '')}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
        {resumeData.educations.length ? (
          <div className="mb-7">
            <h3 className="text-3xl font-bold uppercase mb-1">Education</h3>
            <ul>
              {resumeData.educations.map((education: any, index: number) => (
                <li key={index}>
                  <div className="flex items-center gap-2 text-lg font-bold">
                    <span>
                      {education.degreeName} at {education.schoolName}
                    </span>
                    <div className="flex items-center gap-1">
                      | <LocationIcon className="w-4 h-4" />
                      <span>{education.city}</span>
                    </div>
                  </div>
                  <p>
                    {dayjs(education.dates.start).format('MMM YY')} - {dayjs(education.dates.end).format('MMM YY')}
                  </p>
                  <div className="ml-7 mt-2 prose prose-ul:list-inside prose-ul:!list-disc">
                    {parse(education.description || '')}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
        {resumeData.langs.length ? (
          <div className="resume_item resume_hobby">
            <h3 className="text-3xl font-bold uppercase mb-3">Languages</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {resumeData.langs.map((lang: any, index: number) => (
                <div key={index} className="px-5 py-2 bg-blue-5 rounded-lg">
                  <b>{lang.language}</b> ({lang.level})
                </div>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
