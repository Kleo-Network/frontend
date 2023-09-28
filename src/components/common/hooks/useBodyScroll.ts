import React, { useEffect, useRef } from 'react'

const useBodyScroll = (isOpen: boolean) => {
  const bodyRef = useRef(document.querySelector('body'))

  useEffect(() => {
    const updatePageScroll = () => {
      bodyRef.current!.style.overflow = isOpen ? 'hidden' : ''
    }

    updatePageScroll()
  }, [isOpen])
}

export default useBodyScroll
