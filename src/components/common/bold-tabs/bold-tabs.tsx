/* eslint-disable @typescript-eslint/prefer-optional-chain */
import {useState} from 'react'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const BoldTabs = ({
  tabs,
  defaultTabIndex,
  contentClassName,
  tabsClassName,
  leftSideContent,
  tabClassName,
}: Props) => {
  const [activeTabIdx, setActiveTabIdx] = useState(defaultTabIndex || 0)

  if (!tabs?.length) {
    return ''
  }

  return (
    <div>
      <div className={tabsClassName}>
        <div className="w-full overflow-x-auto">
          <div className={cn('flex w-max', tabClassName)}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTabIdx(index)}
                className={cn(
                  'text-sm font-bold leading-6 py-2 px-7 md:px-14 first:rounded-tl first:rounded-bl first:border-l-2 last:rounded-tr last:rounded-br last:border-r-2 border-x border-y-2 duration-default',
                  activeTabIdx === index ? 'bg-blue border-blue text-white' : 'border-blue-2 text-blue-1',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {leftSideContent}
      </div>
      {tabs[activeTabIdx]?.children ? (
        <div className={cn('mt-7', contentClassName)}>{tabs[activeTabIdx].children}</div>
      ) : (
        ''
      )}
    </div>
  )
}
