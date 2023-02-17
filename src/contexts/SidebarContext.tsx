'use client'

import { useState, createContext, useContext } from 'react'

type SidebarContextData = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  closeSidebar: () => void
  openSidebar: () => void
  toggleSidebar: () => void
}

export const SidebarContext = createContext({} as SidebarContextData)

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(true)

  const closeSidebar = () => setIsOpen(false)
  const openSidebar = () => setIsOpen(true)
  const toggleSidebar = () => setIsOpen((prev) => !prev)

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, closeSidebar, openSidebar, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext)
