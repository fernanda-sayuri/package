import { Path } from 'react-hook-form'

export type SelectRRFProps<Fields> = {
  name: Path<Fields>
  placeholder?: string
  errorMessage?: string

  regionSelect?: boolean

  options: {
    isDefaultValue: 'true' | 'false'
    optionLabel: string
    optionValue: string
    flag?: string
  }[]
  textConfirm?: string
}

