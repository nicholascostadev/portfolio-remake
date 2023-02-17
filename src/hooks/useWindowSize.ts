import { useCallback, useEffect, useState } from 'react'
import { useSidebarContext } from '../contexts/SidebarContext'

type WindowSize = {
  width: number | undefined
  height: number | undefined
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })
  const { setIsOpen } = useSidebarContext()

  const closeSidebarWhenMobile = useCallback(() => {
    setIsOpen((windowSize.width ?? 1920) <= 640)
  }, [setIsOpen, windowSize.width])

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      closeSidebarWhenMobile()
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [closeSidebarWhenMobile])
  return windowSize
}
