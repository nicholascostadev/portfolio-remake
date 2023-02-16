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
    <html
      lang="en"
      className={`${roboto.className} ${jet.variable}`}
      data-theme="dark"
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
        <Providers>
          <Sidebar />
          <main className="w-full max-w-full pl-[79px] xl:pl-[287px]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
