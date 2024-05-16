import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { ModalProps } from './types'
import { Button } from '../uiKit/button'

export const Modal = ({
  children,
  title,
  confirmButtonLabel,
  cancelButtonLabel,
  loadingButton,
  noCloseOnClickOut,
  confirmModal,
  cancelModal,
  isOpen: defaultModalState = true,
  type = 'confirm',
}: ModalProps) => {
  let [isOpen, setIsOpen] = useState(defaultModalState)

  function closeModal(e: any) {
    !noCloseOnClickOut && setIsOpen(false)
  }

  const modalTypes: {
    [type: string]: {
      iconBg: string,
      iconColor: string,
      confirmButtonColor: 'primary' | 'secondary'
    }
  } = {
    "confirm": {
      iconBg: 'bg-ligth-neutral-bg-medium',
      iconColor: '#0073AE',
      confirmButtonColor: 'primary'
    },

    "error": {
      iconBg: 'bg-red-100',
      iconColor: '#dc2626',
      confirmButtonColor: 'secondary'
    },

    "warning": {
      iconBg: 'bg-red-100',
      iconColor: '#0073AE',
      confirmButtonColor: 'primary'
    },

    "success": {
      iconBg: 'bg-red-100',
      iconColor: '#0073AE',
      confirmButtonColor: 'primary'
    }
  }

  const { iconColor, confirmButtonColor, iconBg } = modalTypes[type]

  return (
    <>
      <Transition appear show={defaultModalState || isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-[100]' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur  ' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full p-[1.5rem] rounded-lg gap-y-4 max-w-md transform overflow-hidden bg-ligth-neutral-bg text-left align-middle shadow-lg transition-all'>
                  <div className='flex flex-row items-center gap-x-4'>
                    <div className={`p-[0.688rem] rounded-full ${iconBg}`}>
                      <FiAlertTriangle color={iconColor || '#0073AE'} />
                    </div>

                    <div>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'
                      >
                        {title}
                      </Dialog.Title>
                      <Dialog.Description className='text-sm leading-5 font-normal text-gray-500'>
                        {children}
                      </Dialog.Description>
                    </div>
                  </div>

                  <div className='flex flex-row-reverse gap-2 mt-6'>
                    {confirmButtonLabel && (
                      <Button
                        variant='filled'
                        color={confirmButtonColor}
                        loading={loadingButton}
                        disabled={loadingButton}
                        onClick={confirmModal}
                      >
                        {confirmButtonLabel}
                      </Button>
                    )}
                    {cancelButtonLabel && (
                      <Button
                        variant='outlined'
                        color='primary'
                        onClick={cancelModal}
                      >
                        {cancelButtonLabel}
                      </Button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
