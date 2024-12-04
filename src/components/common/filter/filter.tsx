import {useState, useMemo, useEffect} from 'react'
import {FilterTrashIcon, XIcon} from '@/icons'
import {Props} from './types'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {Checkboxes, DoubleCheckboxes, DoubleSelects, PriceRange, RadioInput, Selects} from './components'
import {cn} from '@/lib/utils'

export const Filter = ({components, className, close, onChange}: Props) => {
  const initialValues = useMemo(
    () => Object.fromEntries(components.map(component => [component.value, {}])),
    [components],
  )
  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    if (onChange) {
      onChange(values)
    }
  }, [values])

  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-between font-bold">
        <h6 className="text-sm text-blue-2">Filter by</h6>
        <button className="inline md:hidden" onClick={close}>
          <XIcon />
        </button>
        <button
          onClick={() => setValues(initialValues)}
          className="hidden md:flex items-center gap-2.5 text-sm text-orange"
        >
          <FilterTrashIcon />
          <span>Reset all</span>
        </button>
      </div>
      <div className="mt-6">
        <Accordion type="multiple">
          {components.map(component => (
            <AccordionItem value={component.value} key={component.value}>
              <AccordionTrigger className="text-blue font-bold leading-6.5 pt-5 pb-2 border-blue-4">
                <div className="flex items-center gap-2">
                  <span>{component.label}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-3">
                {
                  {
                    checkbox: (
                      <Checkboxes
                        values={values[component.value]}
                        onChange={value => setValues(prev => ({...prev, [component.value]: value}))}
                        checkboxes={component.options}
                      />
                    ),
                    select: (
                      <Selects
                        values={values[component.value]}
                        onChange={value => setValues(prev => ({...prev, [component.value]: value}))}
                        selects={component.options}
                      />
                    ),
                    'radio-input': (
                      <RadioInput
                        radios={component.options}
                        value={values[component.value]}
                        onChange={value => setValues(prev => ({...prev, [component.value]: value}))}
                      />
                    ),
                    'double-check': (
                      <DoubleCheckboxes
                        firstListValues={(values[component.value] as any)?.[component.firstListValue as string] || {}}
                        onFirstListValuesChange={value =>
                          setValues(prev => ({
                            ...prev,
                            [component.value as string]: {
                              ...(prev[component.value] || {}),
                              [component.firstListValue as string]: value,
                            },
                          }))
                        }
                        secondListValues={(values[component.value] as any)?.[component.secondListValue as string] || {}}
                        onSecondListValuesChange={value =>
                          setValues(prev => ({
                            ...prev,
                            [component.value as string]: {
                              ...(prev[component.value] || {}),
                              [component.secondListValue as string]: value,
                            },
                          }))
                        }
                        checkboxes={component.options}
                        firstListLabel={component.firstListLabel as string}
                        secondListLabel={component.secondListLabel as string}
                      />
                    ),
                    'double-select': (
                      <DoubleSelects
                        firstListValues={(values[component.value] as any)?.[component.firstListValue as string] || {}}
                        onFirstListValuesChange={value =>
                          setValues(prev => ({
                            ...prev,
                            [component.value as string]: {
                              ...(prev[component.value] || {}),
                              [component.firstListValue as string]: value,
                            },
                          }))
                        }
                        secondListValues={(values[component.value] as any)?.[component.secondListValue as string] || {}}
                        onSecondListValuesChange={value =>
                          setValues(prev => ({
                            ...prev,
                            [component.value as string]: {
                              ...(prev[component.value] || {}),
                              [component.secondListValue as string]: value,
                            },
                          }))
                        }
                        selects={component.options}
                        firstListLabel={component.firstListLabel as string}
                        secondListLabel={component.secondListLabel as string}
                      />
                    ),
                    'price-range': (
                      <>
                        <PriceRange
                          values={values[component.value]}
                          onChange={(key: string, value: number) => {
                            setValues(prev => ({
                              ...prev,
                              [component.value]: {...(prev[component.value] || {}), [key]: value},
                            }))
                          }}
                        />
                      </>
                    ),
                  }[component.type]
                }
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex justify-end py-4">
        <button
          onClick={() => setValues(initialValues)}
          className="md:hidden flex items-center gap-2.5 text-sm text-orange"
        >
          <FilterTrashIcon />
          <span>Reset all</span>
        </button>
      </div>
    </div>
  )
}
