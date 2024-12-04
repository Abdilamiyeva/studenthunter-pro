/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useMemo, useState} from 'react'
import {Props} from './types'

export const ScrollableTabs = ({children, links, sideBarTitle, topSize}: Props) => {
  const [currentSection, setCurrentSection] = useState(links[0].id)
  const height = useMemo(() => (topSize ? `calc(100vh - ${topSize}px)` : '70vh'), [topSize])

  useEffect(() => {
    document.querySelectorAll('.link')?.forEach((item: any) => {
      if (item?.href.includes(currentSection)) {
        item.classList.add('active')
      }
    })
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const links = document.querySelectorAll('.link')
    const wrapper = document.querySelector('.wrapper')

    const handleScroll = () => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setCurrentSection(entry.target.id)
            }
          })
        },
        {threshold: 0.5, root: wrapper},
      )

      sections.forEach((item: any) => {
        observer.observe(item)
      })

      links.forEach((item: any) => {
        if (item?.href.includes('#' + currentSection)) {
          document.querySelector('.active')?.classList.remove('active')
          item.classList.add('active')
        }
      })
    }

    wrapper?.addEventListener('scroll', handleScroll)
    return () => {
      wrapper?.removeEventListener('scroll', handleScroll)
    }
  }, [currentSection])

  return (
    <>
      <div className="hidden xl:flex gap-x-5 justify-between w-full">
        <div style={{height}} className="w-[30%] p-5 border rounded-2xl bg-white border-px border-blue-4">
          <h1 className="text-blue font-extrabold text-xl leading-8">{sideBarTitle}</h1>
          <div className="flex flex-col mt-5 overflow-auto h-[calc(100%-64px)]">
            {links.map(link => (
              <a
                key={link.id}
                onClick={() => setCurrentSection(link.id)}
                href={'#' + link.id}
                className="text-blue-2 link py-3 px-4 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{height}} className="xl:w-[70%] border rounded-2xl bg-white border-px border-blue-4">
          <div className="wrapper p-10 overflow-y-auto w-full h-full">{children}</div>
        </div>
      </div>
      <div className="xl:hidden border rounded-2xl bg-white border-px border-blue-4">
        <div className="wrapper p-5 md:p-10 overflow-y-auto w-full h-full">{children}</div>
      </div>
    </>
  )
}
