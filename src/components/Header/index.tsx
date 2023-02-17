'use client'

import { List } from 'phosphor-react'
import { useSidebarContext } from '../../contexts/SidebarContext'

export const Header = () => {
  const { isOpen, openSidebar } = useSidebarContext()

  if (isOpen) return null

  return (
    <div className="fixed top-0 z-50 flex w-full justify-between border-b border-slate-300 bg-white p-4 dark:border-white/20 dark:bg-slate-900 sm:hidden">
      <button className="" onClick={openSidebar}>
        <List size={32} />
      </button>
      <h1 className="text-2xl">ncdev</h1>
    </div>
  )
}
