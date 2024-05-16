/* eslint-disable react-hooks/exhaustive-deps */
//#region
import { Menu } from '@headlessui/react'
import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { useLogin } from '../../hooks/useLogin'
import { Modal } from '../modal'
//#endregion

export const ToolBar = ({
  name,
  hideItems,
  breadcrumbs
}: {
  children?: React.ReactNode
  name?: string
  buttonLabel?: string
  hideItems?: boolean
  breadcrumbs?: string[]
}) => {
  const { userName, image, logout } = useLogin();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const menuItems = [
    {
      label: 'Logout',
      action: () => setShowLogoutConfirmation(true)
    }
  ]
  return (
    <div className="bg-ligth-neutral-bg flex flex-row min-h-[80px] w-full w-full content-between items-center justify-between border border-t-0 border-r-0 border-l-0 border-1  border-light-neutral-bg-strong px-10">
      <div className='flex items-center justify-between w-full'>
        <div className="flex flex-col">
          <div className="text-[12px] text-ligth-neutral-text-disable flex gap-1 mb-1">
            {
              breadcrumbs?.length && breadcrumbs.map((crumb: string, index: number) => (
                <>
                  <span>{crumb}</span>
                  {
                    index !== breadcrumbs.length - 1 && (
                      <span>&#x2022;</span>
                    )
                  }
                </>
              ))
            }
          </div>
          <h1 className='sm:basis-10/12 text-lg text-ligth-neutral-text text-h1 font-extraBold'>
            {name || 'PackageEntitlement'}
          </h1>
        </div>
        {!hideItems && (
          <div className='flex'>
            <Menu as="div" className="relative inline-block">
              <Menu.Button className="flex items-center text-ligth-neutral-text font-[500]">
                <span className="mr-3">{userName}</span>
                <div className="flex justify-center items-center w-[40px] h-[40px] overflow-hidden rounded-full bg-cover bg-ligth-neutral-bg-medium border border-ligth-neutral-bg-disable" style={{
                  backgroundImage: image ? `url(${image})` : undefined,
                }}>
                  {
                    !image && (
                      <BiUser className="text-[40px] text-ligth-neutral-bg-disable" />
                    )
                  }
                </div>
              </Menu.Button>
              <Menu.Items className="bg-ligth-neutral-bg shadow shadow-slate-300 absolute right-0 w-full">
                {
                  menuItems.map(item => {
                    return (
                      <Menu.Item as="div" className="px-4 py-2 cursor-pointer hover:bg-ligth-neutral-hover-bg" onClick={item.action}>
                        {item.label}
                      </Menu.Item>
                    )
                  })
                }
              </Menu.Items>
            </Menu>

            <Modal
              title="Confirmation"
              confirmButtonLabel="Confirm"
              cancelButtonLabel="Cancel"
              confirmModal={logout}
              cancelModal={() => setShowLogoutConfirmation(false)}
              isOpen={Boolean(showLogoutConfirmation)}
            // loadingButton={loadingCampaing}
            >
              Are you sure you want to <strong>Logout</strong> ?
            </Modal>
          </div>
        )}
      </div>
    </div >
  )
}
