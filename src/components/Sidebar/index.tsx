'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { ToggleThemeButton } from '../ToggleThemeButton'
import { sidebarContent } from './sidebarData'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col items-start fixed w-72 p-4 border-r border-r-slate-100 dark:border-r-slate-800 h-screen">
      <h1 className="text-2xl pb-10">nicholascostadev</h1>

      <div className="flex flex-col gap-6 w-full justify-start items-start">
        {sidebarContent.map(({ title, links }) => (
          <div className="w-full" key={title}>
            <h2 className="mb-1 pb-1 border-b border-b-slate-200 dark:border-b-slate-600 text-slate-600 dark:text-slate-400 pointer-events-none select-none">
              {title}
            </h2>
            {links.map((link) => {
              const isNextLink = !link.isExternal && !link.scroll
              const Component = isNextLink ? Link : 'a'
              const Icon = link.icon as any
              return (
                <Component
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  data-disabled={link.disabled}
                  className={classNames(
                    'inline-flex items-center gap-2 py-2 px-3  text-slate-800 dark:text-slate-50  transition-colors w-full rounded-md ',
                    'hover:bg-slate-100 dark:hover:bg-slate-800',
                    link.disabled &&
                      'pointer-events-none text-slate-800/30 hover:bg-transparent dark:pointer-events-none dark:text-slate-50/30 hover:dark:bg-transparent',
                  )}
                  rel="noreferrer"
                >
                  <Icon size={20} />
                  <div
                    className={classNames(
                      'flex items-center gap-2',
                      link.disabled && 'select-none',
                    )}
                  >
                    <span>{link.label}</span>
                    {link.disabled && link.disabledReason && <CaretRight />}
                    {link.disabled &&
                      link.disabledReason &&
                      `${link.disabledReason}`}
                  </div>
                </Component>
              )
            })}
          </div>
        ))}
        <ToggleThemeButton />
      </div>
    </aside>
  )
}
