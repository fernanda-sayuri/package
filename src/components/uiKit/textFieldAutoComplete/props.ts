import { Path } from 'react-hook-form'

export interface TextFieldAutoCompleteProps {
  name?: string
  icon?: boolean
  options?: {
    optionLabel: string
    optionValue: string
  }[]
  defaultValue?: string[]
  valueSelected?: (key: string, value: string[]) => void
  autocompleteReference?: string
  placeholder?: string
  handleChange?: (value: string) => void
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

