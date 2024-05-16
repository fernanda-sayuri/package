import styled from "styled-components";

export const InputContainer = styled.div.attrs<any>(() => {
  return {
    className:
      "flex flex-row gap-3 bg-ligth-neutral-bg content-center w-full box-border justify-center items-center border border-light-neutral-border rounded-md border-1 py-[0.563rem] px-4 shadow-sm",
  };
})``;
export const Label = styled.label.attrs(() => {
  return {
    className: "flex justify-start items-center text-ligth-main-text",
  };
})``;
export const Input = styled.input.attrs(() => {
  return {
    className:
      "text-sm leading-5 placeholder-ligth-main-text font-normal w-full focus:outline-0 focus:border-0",
  };
})``;
