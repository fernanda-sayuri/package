import styled from "styled-components";

export const Input = styled.div.attrs(() => {
  return {
    className: `flex p-2 w-full px-[16px]  justify-between text-sm text-ligth-neutral-text-disable  border-light-neutral-border`,
  };
})``;
export const Label = styled.label.attrs(() => {
  return {
    className: "flex justify-start item s-center text-ligth-main-text",
  };
})``;
interface ContainerProps {
  error: boolean;
}
export const Container = styled.div.attrs<ContainerProps>(({ error }) => {
  return {
    className: `border border-light-neutral-border divide-y rounded-md overflow-hidden ${
      error && "outline outline-2 outline-red-600"
    }`,
  };
})<ContainerProps>``;
