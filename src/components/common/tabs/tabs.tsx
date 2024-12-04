import {Tabs as TabsUI, TabsContent, TabsTrigger, TabsList} from '@/components/ui/tabs'
import {ExtraProps, Props} from './types'
import {cn} from '@/lib/utils'
import {useMemo} from 'react'

export const Tabs = ({
  tabs = [],
  defaultKey,
  tabItemClassName,
  rightElement,
  className,
  rightElementWrapperClassName,
  selectedTab,
  onChange,
}: Props) => {
  const tabProps = useMemo(() => {
    const props: ExtraProps = {}

    if (onChange) {
      props.value = selectedTab
      props.onValueChange = onChange
    }

    return props
  }, [selectedTab, onChange])

  return (
    <TabsUI
      {...tabProps}
      defaultValue={selectedTab || defaultKey || tabs[0].key}
      className={cn('w-full relative', className)}
    >
      <TabsList className={cn(tabItemClassName)}>
        <div className=" w-full overflow-x-auto scrollbar-hide">
          <div className=" flex md:gap-x-7 gap-x-4 justify-start p-0 relative before:absolute before:h-px before:w-full before:bg-blue-4 before:top-8 ">
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="text-sm md:text-base  data-[state=active]:text-blue !bg-transparent !shadow-none p-0 font-semibold relative after:absolute after:top-8 after:left-0 after:z-10 after:w-full after:h-[3px] after:rounded-full data-[state=active]:after:bg-blue after:duration-default pb-8"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </div>
          <div className={rightElementWrapperClassName}>{rightElement}</div>
        </div>
      </TabsList>
      {tabs.map(tab => (
        <TabsContent key={tab.key} value={tab.key} className="mt-4">
          {tab.children}
        </TabsContent>
      ))}
    </TabsUI>
  )
}
