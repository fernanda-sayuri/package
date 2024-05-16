import { Combobox } from '@headlessui/react'
import styled from 'styled-components'

export const InputContainer = styled.div.attrs<any>(() => {
  return {
    className:
      'flex flex-row gap-3  bg-ligth-neutral-bg content-center w-full box-border justify-center items-center border border-lighth-neutral-border rounded-md border-1 py-[0.563rem] px-[0.938rem] shadow-sm ',
  }
})``
export const Label = styled.label.attrs(() => {
  return {
    className: 'flex justify-center item s-center',
  }
})``
export const Input = styled(Combobox.Input).attrs<any>(() => {
  return {
    className:
      'text-sm leading-5 placeholder-ligth-main-text font-normal w-full focus:outline-0 focus:border-0',
  }
})<any>``

export const OptionsContainer = styled<any>(Combobox.Options).attrs(() => {
  return {
    className:
      'absolute flex flex-col bg-ligth-neutral-bg mt-2 border border-lighth-neutral-border shadow-sm rounded-md border-1 text-sm leading-5 font-normal w-auto',
  }
})``

export const ErrorMessage = styled.p.attrs(() => {
  return {
    className: 'absolute top-11 text-red-500 text-xs',
  }
})``

