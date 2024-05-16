import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  size?: 'md' | 'xs' | 'lg'
  color?: 'primary' | 'secondary' | 'terthiary'
  variant?: 'outlined' | 'filled' | 'transparent'
  fullWidth?: boolean
  loading?: boolean
  onClick?: () => void
  style?: any
  className?: string
}
