'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { ToggleThemeButton } from '../ToggleThemeButton'
import { sidebarContent } from './sidebarData'

export const Sidebar = () => {
  return (
    <aside className="fixed flex h-screen w-20 flex-col items-center border-r border-r-slate-100 bg-white p-4 dark:border-r-slate-800 dark:bg-slate-900 xl:w-72 xl:items-start">
      <Link href="/">
        <span className="sr-only">Go to Home page</span>
        <h1 className="hidden pb-10 text-2xl xl:block">nicholascostadev</h1>
      </Link>
      <Link href="/">
        <span className="sr-only">Go to Home page</span>
        <h1 className="block pb-10 text-center text-2xl xl:hidden">ncdev</h1>
      </Link>

      <div className="flex w-full flex-col items-start justify-start gap-6">
        {sidebarContent.map(({ title, links }) => (
          <div
            className="flex w-full flex-col items-center justify-center xl:items-start xl:justify-start"
            key={title}
          >
            <h2 className="pointer-events-none mb-1 w-full select-none border-b border-b-slate-200 pb-1 text-center text-slate-600 dark:border-b-slate-600 dark:text-slate-400 xl:text-left">
              {title === 'Home page' ? (
                <>
                  Home <span className="hidden xl:inline">page</span>
                </>
              ) : (
                <>{title}</>
              )}
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
                    'flex w-auto items-center justify-center gap-2 rounded-md py-2 px-2 text-slate-800  transition-colors dark:text-slate-100  xl:w-full xl:items-start xl:justify-start xl:px-3 ',
                    'hover:bg-slate-100 dark:hover:bg-slate-800',
                    link.disabled &&
                      'pointer-events-none text-slate-800/30 hover:bg-transparent dark:pointer-events-none dark:text-slate-50/30 hover:dark:bg-transparent',
                  )}
                  rel="noreferrer"
                >
                  <Icon size={20} />
                  <span className="sr-only inline md:hidden">{link.name}</span>
                  <div
                    className={classNames(
                      'hidden items-center gap-2 xl:flex',
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
      </div>
      <div className="w-full pt-4">
        <h2 className="pointer-events-none mb-1 w-full select-none border-b border-b-slate-200 pb-1 text-center text-slate-600 dark:border-b-slate-600 dark:text-slate-400 xl:text-left">
          Tema
        </h2>
        <ToggleThemeButton className="flex w-full gap-2 border-none" />
      </div>
    </aside>
  )
}
