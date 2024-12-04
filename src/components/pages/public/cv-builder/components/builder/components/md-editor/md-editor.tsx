import {useMemo} from 'react'
import ReactQuill, {ReactQuillProps} from 'react-quill'
import {Props} from './types'
import 'react-quill/dist/quill.snow.css'
import {cn} from '@/lib/utils'

export const MDEditor = ({label, required, id, placeholder, value, onChange, onBlur, className}: Props) => {
  const componentProps = useMemo(() => {
    const props: ReactQuillProps = {}

    if (onChange) {
      props.value = value
      props.onChange = onChange
      props.onBlur = onBlur
    }

    return props
  }, [value, onChange, onBlur])

  return (
    <div>
      {label && (
        <span className="block mb-2.5 text-blue-1 leading-6 font-bold">
          {label} {required && <span className="text-orange">*</span>}
        </span>
      )}
      <div className={cn('bg-blue-7 rounded-lg overflow-hidden p-6', className)}>
        <div id={id || 'md-toolbar'} className="flex gap-4 !border-0">
          <button type="button" className="ql-bold scale-150" />
          <button type="button" className="ql-italic scale-150" />
          <button type="button" className="ql-underline scale-150" />
          <button type="button" className="ql-strike scale-150" />
          <div className="h-6 w-px border border-blue-4" />
          <button type="button" className="ql-list scale-150" value="bullet" />
        </div>
        <ReactQuill
          theme="snow"
          modules={{
            toolbar: {
              container: `#${id}`,
            },
          }}
          placeholder={
            placeholder || 'e.g. Passionate science teacher with 8+ years of experience and a track record of ...'
          }
          className="h-[172px]"
          {...componentProps}
        />
      </div>
    </div>
  )
}
