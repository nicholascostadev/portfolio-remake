'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { ToggleThemeButton } from '../ToggleThemeButton'
import { sidebarContent } from './sidebarData'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center xl:items-start fixed w-20 xl:w-72 p-4 bg-white dark:bg-slate-900 border-r border-r-slate-100 dark:border-r-slate-800 h-screen">
      <Link href="/">
        <h1 className="text-2xl pb-10 hidden xl:block">nicholascostadev</h1>
      </Link>
      <Link href="/">
        <h1 className="text-2xl pb-10 block xl:hidden text-center">ncdev</h1>
      </Link>

      <div className="flex flex-col gap-6 w-full justify-start items-start">
        {sidebarContent.map(({ title, links }) => (
          <div
            className="w-full flex flex-col justify-center items-center xl:justify-start xl:items-start"
            key={title}
          >
            <h2 className="mb-1 pb-1 border-b w-full text-center xl:text-left border-b-slate-200 dark:border-b-slate-600 text-slate-600 dark:text-slate-400 pointer-events-none select-none">
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
                  href={isNextLink ? link.href : `/${link.href}`}
                  target={link.isExternal ? '_blank' : undefined}
                  data-disabled={link.disabled}
                  className={classNames(
                    'flex justify-center items-center xl:justify-start xl:items-start gap-2 py-2 px-2 xl:px-3  text-slate-800 dark:text-slate-100  transition-colors w-auto xl:w-full rounded-md ',
                    'hover:bg-slate-100 dark:hover:bg-slate-800',
                    link.disabled &&
                      'pointer-events-none text-slate-800/30 hover:bg-transparent dark:pointer-events-none dark:text-slate-50/30 hover:dark:bg-transparent',
                  )}
                  rel="noreferrer"
                >
                  <Icon size={20} />
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
      <div className="pt-4 w-full">
        <h2 className="mb-1 pb-1 border-b w-full text-center xl:text-left border-b-slate-200 dark:border-b-slate-600 text-slate-600 dark:text-slate-400 pointer-events-none select-none">
          Tema
        </h2>
        <ToggleThemeButton className="flex gap-2 border-none w-full" />
      </div>
    </aside>
  )
}
