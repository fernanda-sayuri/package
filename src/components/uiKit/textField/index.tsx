import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { ErrorMessage } from "../errorMessage";
import { LoadingSpinner } from "../loading";
import { Input as InputUI, InputContainer, Label } from "./style";

/**
  - this component use react hook forms to manage forms.
  - react hook form providers is required to correct implementation.
 **/

export const Input = <FormFields extends Record<string, any>>({
  name,
  icon,
  error,
  errorMessage: errorLabel,
  label,
  ...props
}: any) => {
  const [active, setActive] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext<FormFields>();
  const { onBlur, ...rest } = register(name, error);
  const convertNameDotToJson = name
    ?.split(".")
    ?.reduce((a: any, c: any) => a?.[c], errors);

  const errorMessage = convertNameDotToJson?.message as string;
  const classesActive = active && "outline outline-2 outline-indigo-600 ";
  const classesError = errorMessage && "outline outline-2 outline-red-600 ";
  if (!name) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div
        className={`relative ${props.fullWidth ? "w-full" : ""} ${
          props.disabled ? "opacity-40" : ""
        }`}
      >
        {label && <Label htmlFor={name}>{label}</Label>}
        <InputContainer className={`${classesActive} ${classesError}`}>
          {icon && (
            <Label htmlFor={name}>
              <FiSearch />
            </Label>
          )}
          <InputUI
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            {...props}
            {...rest}
          />
        </InputContainer>
      </div>
      {errorMessage && (
        <ErrorMessage>{errorLabel || errorMessage}</ErrorMessage>
      )}
    </>
  );
};
