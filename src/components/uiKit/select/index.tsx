import { Listbox } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { ErrorMessage } from "../errorMessage";
import { LoadingSpinner } from "../loading";
import { SelectContainer } from "./style";
import { SelectRRFProps } from "./types";
/**
  - this component use react hook forms to manage forms.
  - react hook form providers is required to correct implementation.
 **/

export const Select = <SelectFields extends Record<string, any>>({
  name,
  options,
  errorMessage: errorLabel,
  regionSelect
}: SelectRRFProps<SelectFields>) => {
  const {
    setValue,
    watch,
    formState: { errors },
    register,
  } = useFormContext();
  register(name);
  const selectedValue = watch(name);
  const getSelectedValueToShow: any = options.filter(
    (item) => item.optionValue === selectedValue
  );
  const defaultValue = options.filter((item) => item.isDefaultValue === "true");
  const convertNameDotToJson = name
    ?.split(".")
    ?.reduce((a: any, c: any) => a?.[c], errors);

  const errorMessage = convertNameDotToJson?.message as string;
  if (!name) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Listbox value={""} onChange={() => { }}>
        <SelectContainer error={errorMessage} className={regionSelect ? 'bg-transparent border-none ' : ''}>
          {
            regionSelect ? (
              <div className="flex">
                <div>
                  <img src={getSelectedValueToShow?.[0]?.flag ||
                      defaultValue[0]?.flag}
                    height={40} width={40} alt="" className="mr-[12px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-ligth-neutral-text-cross-white opacity-60 uppercase text-[12px] self-start">Region</span>
                  <div className="flex items-center text-[20px] self-start text text-ligth-neutral-text-cross-white">
                    <span className="mr-[12px]">{getSelectedValueToShow?.[0]?.optionLabel ||
                      defaultValue[0]?.optionLabel}</span>
                    <FaChevronDown width={13} />
                  </div>
                </div>
              </div>
            ) : (
              <>
                {getSelectedValueToShow?.[0]?.optionLabel ||
                  defaultValue[0]?.optionLabel}
                <FaChevronDown />
              </>
            )
          }
        </SelectContainer>
        <div className="relative">
          <Listbox.Options className={`${regionSelect ? 'bottom-[60px]' : ''} absolute flex flex-col z-50 bg-ligth-neutral-bg w-56 mt-2 border border-state-400/20 shadow-sm rounded-md border-1 text-sm leading-5 font-normal max-h-[400px] overflow-y-scroll`}>
            {options.map((item, index) => {
              const isDisabled = item?.isDefaultValue === "true" ? true : false;
              const isSelected = item.optionValue === selectedValue;
              return (
                <Listbox.Option
                  key={index}
                  value={item.optionValue}
                  disabled={isDisabled}
                  onClick={() => {
                    setValue(name, item.optionValue as any, {
                      shouldTouch: true,
                      shouldValidate: true,
                    });
                  }}
                  className={`px-4 py-3 whitespace-nowrap flex flex-row gap-3 items-center cursor-pointer hover:bg-ligth-neutral-hover-bg-medium rounded-sm
                ${isSelected &&
                    !isDisabled &&
                    "bg-ligth-neutral-bg-medium text-ligth-main-text hover:!outline-indigo-0 hover:!outline hover:!outline-0 cursor-not-allowed "
                    }
                ${isDisabled &&
                    "opacity-40 hover:!outline-indigo-0 hover:!outline hover:!outline-0 cursor-not-allowed "
                    }`}
                >
                  {item.optionLabel}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </div>
      </Listbox>
      {
        errorMessage && (
          <ErrorMessage>{errorLabel || errorMessage}</ErrorMessage>
        )
      }
    </>
  );
};
