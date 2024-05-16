import { Path } from 'react-hook-form'

export interface TextFieldAsyncAutoCompleteProps {
  name?: string
  icon?: boolean

  defaultValue?: string[]
  valueSelected: (key: string, value: string, label: string) => void
  autocompleteReference?: string
  placeholder?: string
  handleChange: (value: string) => Promise<
    {
      optionLabel: string
      optionValue: string
    }[]
  >
}
type RRFprops<FormFields> = {
  name: Path<FormFields>
  icon?: boolean
}
export interface IconProps {
  [x: string]: string
}
export type DinamicInputRRF<FormFields> = RRFprops<FormFields>

export interface TextFieldProps {
  name?: string
  icon?: boolean
  options?: {
    optionLabel?: string
    optionValue?: string
  }[]
  valueSelected?: (name: string, value: string) => void
  autocompleteReference?: string
}

