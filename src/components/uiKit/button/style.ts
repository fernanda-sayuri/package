import styled from 'styled-components'
import { ButtonProps } from './types'

export const ButtonContainer = styled.button.attrs<ButtonProps>((props) => {
  const variant: any = {
    outlined: {
      primary: `border border-1 border-ligth-main-text shadow-sm active:outline-indigo-300 text-ligth-main-text`,
      secondary: `border border-1 border-gray-600 shadow-sm active:outline-gray-300 text-red-600`,
      terthiary: `border border-1 border-gray-600 shadow-sm active:outline-gray-300 `,
    },
    filled: {
      primary: `bg-ligth-main-text  hover:bg-ligth-main-hover-bg-strong text-white shadow-sm active:outline-indigo-300`,
      secondary:
        'bg-red-600 hover:bg-red-700 text-white shadow-sm active:outline-red-300',
      terthiary:
        'bg-white hover:bg-white-700 text-black shadow-sm active:outline-black-300 border border-light-neutral-border',
    },
    transparent: {
      primary: `bg-none border-none active:outline-indigo-300`,
      secondary: `bg-none border-none active:outline-red-300`,
    },
  }

  return {
    className: `${props.className} flex py-[0.563rem] px-[1.063rem] ${
      variant[props.variant || 'filled'][props.color || 'primary']
    } 
    ${props.fullWidth && 'w-full'}
     flex-row gap-3 text-sm leading-5 font-medium box-border content-center justify-center items-center  rounded-md  disabled:opacity-20  active:outline active:outline-2 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed	`,
  }
})``
