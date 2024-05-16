import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../errorMessage";
import { LoadingSpinner } from "../loading";

export const Radio = <FormFields extends Record<string, any>>({
  name,
  icon,
  error,
  errorMessage: errorLabel,
  options,
  label,
  ...props
}: any) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormFields>();
  const { onBlur, ...rest } = register(name, error);
  const errorMessage = errors[name]?.message as string;

  if (!name) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {options?.map((item: { label: string; value: string }) => (
        <>
          <input
            type="radio"
            id={name}
            value={watch(name)}
            {...props}
            {...rest}
          />
          <label htmlFor={name}>{item.label}</label>
        </>
      ))}
      {errorMessage && <ErrorMessage>{errorLabel}</ErrorMessage>}
    </>
  );
};
