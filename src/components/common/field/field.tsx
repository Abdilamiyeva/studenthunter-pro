import {FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'
import {Props} from './types'
import {
  CardImagesUploader,
  CheckboxesDropdown,
  CircleCheckbox,
  RadioContainer,
  DatePicker as DatePickerForm,
  FileInput,
  FullFunctionedPhotoUploader,
  ImageUploader,
  Input,
  SecondInput,
  Select,
  SingleImageUploader,
  TagInput,
  SingleVideoUploader,
  SearchableCheckboxes,
} from '..'
import {
  DatePicker as CVBuilderDatePicker,
  MDEditor as CVBuilderMDEditor,
} from '@/components/pages/public/cv-builder/components/builder/components'

export const Field = ({type, control, name, rules, componentProps = {}}: Props) => (
  <FormField
    control={control}
    name={name}
    rules={{required: componentProps.required && 'Please fill out the form', ...(rules || {})}}
    render={({field}) => (
      <FormItem>
        <FormControl>
          {
            {
              input: <Input {...componentProps} value={field.value} onChange={field.onChange} onBlur={field.onBlur} />,
              'second-input': (
                <SecondInput {...componentProps} value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
              ),
              select: <Select {...componentProps} value={field.value} onChange={field.onChange} />,
              'cv-builder-date-picker': (
                <CVBuilderDatePicker {...componentProps} value={field.value} onChange={field.onChange} />
              ),
              'cv-builder-md-editor': (
                <CVBuilderMDEditor
                  {...componentProps}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              ),
              'image-uploader': <ImageUploader {...componentProps} value={field.value} onChange={field.onChange} />,
              'circle-checkbox': <CircleCheckbox {...componentProps} checked={field.value} onChange={field.onChange} />,
              'full-functioned-photo-uploader': (
                <FullFunctionedPhotoUploader {...componentProps} value={field.value} onChange={field.onChange} />
              ),
              'single-image-upload': (
                <SingleImageUploader {...componentProps} value={field.value} onChange={field.onChange} />
              ),
              'card-images-uploader': <CardImagesUploader value={field.value} onChange={field.onChange} />,
              'radio-container': (
                <RadioContainer {...componentProps} name={name} checked={field.value} onChange={field.onChange} />
              ),
              'date-picker': <DatePickerForm {...componentProps} onChange={field.onChange} value={field.value} />,
              'file-input': <FileInput {...componentProps} onChange={field.onChange} value={field.value} />,
              'tag-input': <TagInput {...componentProps} onChange={field.onChange} value={field.value} />,
              'checkboxes-dropdown': (
                <CheckboxesDropdown {...componentProps} onChange={field.onChange} value={field.value} />
              ),
              'single-video-upload': (
                <SingleVideoUploader {...componentProps} onChange={field.onChange} value={field.value} />
              ),
              'searchable-checkboxes': (
                <SearchableCheckboxes {...componentProps} onChange={field.onChange} value={field.value} />
              ),
            }[type]
          }
        </FormControl>
        <FormMessage className="font-bold text-sm" />
      </FormItem>
    )}
  />
)
