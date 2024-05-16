import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../errorMessage";
import { LoadingSpinner } from "../loading";
import { InputGroupItem } from "./inputGroupItem";
import { InputGroupProps } from "./porps";
import { Container, Label } from "./style";

export const InputGroup: React.FC<InputGroupProps> = ({
  options,
  label,
  isRadio,
  error = false,
  name,
  errorMessage,
}) => {
  const { watch, setValue, formState, register } = useFormContext();
  register(name);
  function handleUpdateValue(key: string, value: boolean) {
    const data = watch(name);
    if (isRadio) {
      setValue(name, key, { shouldValidate: true });

      return;
    }
    if (value) {
      setValue(name, [...data, key], {
        shouldValidate: true,
      });
      return;
    }
    const removeKey = data.filter((item: string) => item !== key);
    setValue(name, removeKey, {
      shouldValidate: true,
    });
  }
  if (!options) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Label>{label}</Label>
      <Container error={Boolean(formState.errors[name])}>
        {options.map((item, index) => {
          return (
            <InputGroupItem
              {...item}
              isRadio={isRadio}
              name={isRadio ? `${name}` : `${name}.${index}`}
              checkboxUpdate={handleUpdateValue}
            />
          );
        })}
      </Container>
      {formState?.errors?.[name] && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
