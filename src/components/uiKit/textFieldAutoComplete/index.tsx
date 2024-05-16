/* eslint-disable react-hooks/exhaustive-deps */
import { Combobox, Transition } from "@headlessui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import * as IconsAI from "react-icons/ai";
import * as IconsBI from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import * as IconsMD from "react-icons/md";
import { LoadingSpinner } from "../loading";
import { IconProps } from "./props";
import {
  Input as InputUI,
  InputContainer,
  Label,
  OptionsContainer
} from "./style";

/**
  - this component use react hook forms to manage forms.
  - react hook form providers is required to correct implementation.
 **/

export const InputAutoComplete = ({
  name,
  icon,
  options,
  valueSelected,
  autocompleteReference,
  defaultValue,
  placeholder,
  handleChange,
  ...props
}: any) => {
  const [filterOptions, setFilterOption] = useState(options);
  const selectIcons: IconProps = {
    WEB: "MdOutlineWebAsset",
    IOS: "AiFillApple",
    ANDROID: "AiFillAndroid",
    inApp: "BiNotification",
    pushNotification: "MdOutlineTouchApp",
  };
  const methods = useFormContext();
  methods.register(name);
  function handleFilterValue(value: string) {
    setFilterOption(
      options.filter((item: { optionValue: string }) =>
        item.optionValue.toLowerCase().includes(value.toLowerCase())
      )
    );
  }
  function handleRemoveItem(nameKey: string) {
    const removeItemFromFilter = methods
      .watch(name)
      .split(",")
      .filter((item: string) => item !== nameKey);
    methods.setValue(name, removeItemFromFilter.join(','));
  }
  if (!name) {
    return <LoadingSpinner />;
  }
  return (
    <Combobox
      value={methods.watch(name) ? methods.watch(name).split(",") : []}
      onChange={(value) => methods.setValue(name, value.join(","))}
      multiple
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
              {value.length > 0 && (
                <ul className="flex flex-row gap-2">
                  {value?.map((selectedFilter: string) => {
                    return (
                      <li
                        className="flex h-[20px] whitespace-nowrap items-center justify-between gap-4 bg-slate-100 px-1 cursor-pointer flex-nowrap hover:bg-slate-300 hover:line-through"
                        key={selectedFilter}
                        onClick={() => handleRemoveItem(selectedFilter)}
                      >
                        {selectedFilter.toLowerCase()}{" "}
                        <IconsAI.AiOutlineClose size={10} />
                      </li>
                    );
                  })}
                </ul>
              )}
              <InputUI
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange && handleChange(event.target.value);
                  handleFilterValue(event.target.value);
                }}
                data-testid="input"
                placeholder={placeholder}
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
              <OptionsContainer static>
                {filterOptions?.length < 1 ? (
                  <Combobox.Option
                    className={`px-4 py-3  w-72 whitespace-nowrap flex flex-row gap-3 items-center cursor-pointer justify-between hover:!outline-indigo-600 hover:!outline hover:!outline-2 rounded-sm
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
                        className="w-72"
                        key={item.optionValue}
                        value={item.optionValue}
                      >
                        {({ selected, active }) => {
                          return (
                            <div
                              className={`flex px-4 py-3 flex-row justify-between flex-1 items-center cursor-pointer         
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
                              <div
                                className={`bg-[#F5FAFF] px-3 py-1 
                              ${
                                selected &&
                                !active &&
                                "bg-ligth-main-text text-ligth-neutral-hover-bg"
                              }
                              ${selected && active && "bg-slate-100"}
                              
                              `}
                              >
                                <h1>{autocompleteReference}</h1>
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
