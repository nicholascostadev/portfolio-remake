'use client'

import { IconButton } from './IconButton'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'phosphor-react'

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <IconButton
      onClick={toggleTheme}
      className="flex gap-2"
      size="small"
      aria-label="Trocar tema"
      name="Trocar tema"
    >
      <span className="not-sr-only">Trocar para </span>
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </IconButton>
  )
}
