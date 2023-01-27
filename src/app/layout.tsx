import { Sidebar } from '@/components/Sidebar'
import './globals.css'

import { Roboto } from '@next/font/google'
import { Providers } from '@/Providers'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 flex">
        <Providers>
          <Sidebar />
          <div className="pl-72">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
