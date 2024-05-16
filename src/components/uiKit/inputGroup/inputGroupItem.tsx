import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputGroupItemProps } from './porps'
import { Input } from './style'

export const InputGroupItem: React.FC<InputGroupItemProps> = ({
  label,
  name,
  isRadio,
  checkboxUpdate,
  value,
}) => {
  const methods = useFormContext()
  const [enabled, setEnable] = useState(
    isRadio ? methods.watch(name) === value : false
  )
  return (
    <Input>
      <label htmlFor={name}>{label}</label>
      <Switch
        checked={isRadio ? methods.watch(name) === value : enabled}
        id={name}
        onChange={(checboxState: boolean) => {
          !isRadio && setEnable(checboxState)
          checkboxUpdate(value, checboxState)
        }}
        className={`${
          (isRadio ? methods.watch(name) === value : enabled)
            ? 'bg-blue-600'
            : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className='sr-only'>Enable notifications</span>
        <span
          className={`${
            (isRadio ? methods.watch(name) === value : enabled)
              ? 'translate-x-6'
              : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </Input>
  )
}
