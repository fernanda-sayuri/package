import styled from "styled-components";
import { Listbox } from "@headlessui/react";

export const SelectContainer = styled(Listbox.Button).attrs<any>(
  ({ error }) => {
    const classesError = "outline outline-2 outline-red-600 ";
    return {
      className: `${
        error && classesError
      } text-ligth-main-text rounded-md border-1 whitespace-nowrap gap-3 text-sm leading-5 font-normal py-[0.563rem] px-[0.938rem]  border border-light-neutral-border w-full bg-ligth-neutral-bg shadow-sm focus:!outline-indigo-600 focus:!outline focus:!outline-2 flex flex-nowrap justify-between align-center items-center`,
    };
  }
)<any>``;
