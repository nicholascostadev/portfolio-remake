'use client'

import { IconButton } from './IconButton'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'phosphor-react'

type ToggleThemeButtonProps = {
  className?: string
}

export const ToggleThemeButton = ({ className }: ToggleThemeButtonProps) => {
  const { theme, setTheme, themes, systemTheme, forcedTheme, resolvedTheme } =
    useTheme()

  // console.log({
  //   theme,
  //   themes,
  //   systemTheme,
  //   forcedTheme,
  //   resolvedTheme,
  // })

  const toggleTheme = () => {
    console.log({ systemTheme, theme })

    if ((theme === 'system' && systemTheme === 'dark') || theme === 'dark') {
      setTheme('light')
      return
    }

    setTheme('dark')
  }

  if (!theme) {
    return null
  }

  return (
    <IconButton
      onClick={toggleTheme}
      className={className}
      size="small"
      aria-label="Trocar tema"
      name="Trocar tema"
    >
      <span className="not-sr-only hidden xl:inline-flex">Trocar para </span>
      {theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </IconButton>
  )
}
