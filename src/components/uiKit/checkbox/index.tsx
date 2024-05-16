import { useFormContext } from 'react-hook-form'
import { CheckboxProps } from './props'

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<any>()

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type='checkbox'
        name={name}
        className='mx-3'
        id={name}
        {...register}
      />
    </>
  )
}
