import { LoadingSpinner } from '../loading'
import { ButtonContainer } from './style'
import { ButtonProps } from './types'

/**
 *  - This button layout fill full heigth dad component, is nescessary pass heigth to parent component
 *
 **/
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...props}>
      {props.loading && <LoadingSpinner size={props.size} />}
      {children}
    </ButtonContainer>
  )
}
