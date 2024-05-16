export interface InputGroupProps {
  label: string
  error?: boolean
  name: string
  errorMessage?: string
  isRadio?: boolean
  options: {
    label: string
    value: string
  }[]
}
export interface InputGroupItemProps {
  label: string
  isRadio?: boolean

  checkboxUpdate: (key: string, value: boolean) => void
  value: string
  name: string
}
