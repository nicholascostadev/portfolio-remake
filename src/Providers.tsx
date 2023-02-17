'use client'

import { ThemeProvider } from 'next-themes'
import { SidebarContextProvider } from './contexts/SidebarContext'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <SidebarContextProvider>{children}</SidebarContextProvider>
    </ThemeProvider>
  )
}
