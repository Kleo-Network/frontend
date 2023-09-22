import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { ReactComponent as CloseIcon } from '../../assets/images/cross.svg'

type SideDrawerProps = {
  isOpen: boolean
  onClose: () => void
  className?: string
  removeWhenClosed?: boolean
  showCloseButton?: boolean
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  className,
  showCloseButton = false,
  //   removeWhenClosed = true,
  children
}) => {
  const bodyRef = useRef(document.querySelector('body'))
  const portalRootRef = useRef(
    document.getElementById('drawer-root') || createPortalRoot()
  )

  useEffect(() => {
    bodyRef.current!.appendChild(portalRootRef.current)
    const portal = portalRootRef.current
    const bodyEl = bodyRef.current

    return () => {
      portal.remove()
      bodyEl!.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current!.style.overflow = 'hidden'
      } else {
        bodyRef.current!.style.overflow = ''
      }
    }

    updatePageScroll()
  }, [isOpen])

  function createPortalRoot() {
    const drawerRoot = document.createElement('div')
    drawerRoot.setAttribute('id', 'drawer-root')

    return drawerRoot
  }

  const drawerClasses = classNames(
    'fixed inset-y-0 right-0 w-full md:w-[40vw] bg-white transform transition-transform ease-in-out duration-300 overflow-auto',
    {
      'translate-x-0 drop-shadow-4xl': isOpen,
      'translate-x-full': !isOpen
    },
    className
  )

  /**
   * TODO: Ideally we should remove the portal div when the drawer is closed,
   * but this causes a bug as we can't apply the transition to the drawer
   * which is mounting/unmounting. To fix this, in future we would create
   * custom motionTransition hook to handle this.
   * Refer: https://www.letsbuildui.dev/articles/building-a-drawer-component-with-react-portals/
   *  */
  //   if (removeWhenClosed && !isOpen) {
  //     return null
  //   }

  return createPortal(
    <div aria-hidden={isOpen ? 'false' : 'true'} className={drawerClasses}>
      <div className="flex justify-end" role="dialog">
        {showCloseButton && (
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>,
    portalRootRef.current
  )
}

export default SideDrawer
