import { ReactNode } from 'react'

export type ModalType = 'error' | 'confirm' | 'warning' | 'success'

export interface ModalProps {
  children: ReactNode
  title: string
  noCloseOnClickOut?: boolean
  confirmButtonLabel?: string
  cancelButtonLabel?: string
  loadingButton?: boolean
  confirmModal?: () => void
  isOpen?: boolean
  cancelModal?: () => void
  type?: ModalType
}
