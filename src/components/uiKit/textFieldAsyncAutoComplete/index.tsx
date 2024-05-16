/* eslint-disable react-hooks/exhaustive-deps */
import { Combobox, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import * as IconsAI from "react-icons/ai";
import * as IconsBI from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import * as IconsMD from "react-icons/md";
import { LoadingSpinner } from "../loading";
import { IconProps, TextFieldAsyncAutoCompleteProps } from "./props";
import {
  Input as InputUI,
  InputContainer,
  Label,
  OptionsContainer,
} from "./style";
import { useDebounce } from "../../../hooks/useLogin/useDebounce";
/**
  - this component use react hook forms to manage forms.
  - react hook form providers is required to correct implementation.
 **/

export const InputAsyncAutoComplete = ({
  name,
  icon,
  valueSelected,
  autocompleteReference,
  defaultValue,
  placeholder,
  handleChange,
  ...props
}: TextFieldAsyncAutoCompleteProps) => {
  const [selectedFilter, setSelectedFilter] = useState<{
    optionLabel: string;
    optionValue: string;
  }>({ optionLabel: "", optionValue: "" });
  const debounce = useDebounce(1000);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [filterOptions, setFilterOption] = useState<
    {
      optionLabel: string;
      optionValue: string;
    }[]
  >([]);

  const selectIcons: IconProps = {
    WEB: "MdOutlineWebAsset",
    IOS: "AiFillApple",
    ANDROID: "AiFillAndroid",
    inApp: "BiNotification",
    pushNotification: "MdOutlineTouchApp",
  };

  useEffect(() => {
    if (name) {
      valueSelected(
        name,
        selectedFilter.optionValue,
        selectedFilter.optionLabel
      );
    }
  }, [selectedFilter]);

  if (!name) {
    return <LoadingSpinner />;
  }

  return (
    <Combobox
      value={selectedFilter}
      onChange={(value: any) => {
        setSelectedFilter(value);
      }}
    >
      {({ open, value }) => {
        return (
          <>
            <InputContainer>
              <Label htmlFor={name}>
                {icon && (
                  <FiSearch
                    className="text-ligth-main-text"
                    data-testid="serch-icon"
                  />
                )}
              </Label>
              <InputUI
                onChange={async (
                  event: React.ChangeEvent<HTMLInputElement>
                ) => {
                  setLoadingSearch(true);
                  debounce(async () => {
                    await handleChange(event.target.value)
                      .then((value) => {
                        setFilterOption(value);
                      })
                      .finally(() => {
                        setLoadingSearch(false);
                      });
                  });
                }}
                data-testid="input"
                displayValue={(value: {
                  optionLabel: string;
                  optionValue: string;
                }) => value.optionLabel}
                placeholder={selectedFilter.optionLabel ? "" : placeholder}
                {...props}
              />
            </InputContainer>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <OptionsContainer>
                {loadingSearch && (
                  <div className="p-2">
                    <LoadingSpinner />{" "}
                  </div>
                )}

                {filterOptions?.length < 1 && !loadingSearch ? (
                  <Combobox.Option
                    className={`px-4 py-3 w-full whitespace-nowrap flex flex-row gap-3 items-center cursor-pointer justify-between hover:!outline-indigo-600 hover:!outline hover:!outline-2 rounded-sm
     `}
                    data-testid="empty-message"
                    value={""}
                  >
                    Nothing was found in this search
                  </Combobox.Option>
                ) : (
                  filterOptions?.map((item: any) => {
                    const IconMd: any = IconsMD;
                    const IconAi: any = IconsAI;
                    const IconBi: any = IconsBI;
                    const IconGettedFromFeather =
                      selectIcons[item.optionValue] &&
                      (IconMd[selectIcons[item.optionValue]] ||
                        IconAi[selectIcons[item.optionValue]] ||
                        IconBi[selectIcons[item.optionValue]]);
                    return (
                      <Combobox.Option
                        className="w-full"
                        key={item.optionValue}
                        value={item}
                      >
                        {({ selected, active }) => {
                          return (
                            <div
                              className={`flex px-4 py-3 flex-row justify-between flex-1 w-full items-center cursor-pointer         
                            ${
                              selected &&
                              active &&
                              "bg-ligth-neutral-hover-bg-medium "
                            }
                            ${
                              selected &&
                              !active &&
                              "bg-ligth-neutral-bg-medium text-ligth-main-text border border-b-ligth-neutral-hover-bg-medium"
                            }
                            ${
                              active &&
                              !selected &&
                              "bg-ligth-neutral-hover-bg-medium "
                            }
                            `}
                            >
                              <div
                                className={`flex flex-row gap-2 items-center ${
                                  active && "text-black"
                                }`}
                              >
                                {selectIcons[item.optionValue] && !selected && (
                                  <IconGettedFromFeather className="text-ligth-main-text" />
                                )}

                                {item.optionLabel}
                              </div>
                            </div>
                          );
                        }}
                      </Combobox.Option>
                    );
                  })
                )}
              </OptionsContainer>
            </Transition>
          </>
        );
      }}
    </Combobox>
  );
};
