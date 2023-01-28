import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import './markdown.scss'

import { Roboto, JetBrains_Mono } from '@next/font/google'
import { Providers } from '@/Providers'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const jet = JetBrains_Mono({
  variable: '--jetbrains-mono-font',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.className} ${jet.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex">
        <Providers>
          <Sidebar />
          <main className="pl-20 xl:pl-72 w-full">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
