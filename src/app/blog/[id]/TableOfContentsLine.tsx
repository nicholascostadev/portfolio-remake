'use client'

import { clsxm } from '@/utils/clsxm'
import { getSlugByTitle } from '@/utils/getSlugByTitle'
import { Link } from 'phosphor-react'

type TableOfContentsLineProps = {
  content: string
  isActive?: boolean
  postId: number
}

export const TableOfContentsLine = ({
  content,
  isActive,
  postId,
}: TableOfContentsLineProps) => {
  const handleCopyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
  }

  return (
    <a
      href={`#${getSlugByTitle(content)}`}
      className={clsxm(
        'group flex justify-start items-center gap-4',
        "text-slate-800 dark:text-slate-400  before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-transparent",
        isActive && 'before:bg-blue-600 before:rounded-full',
        'hover:underline',
      )}
    >
      {content.replace(/_/g, '').replace(/:/g, '')}

      <button
        onClick={() => {
          const url = `${
            process.env.NEXT_PUBLIC_URL
          }/blog/${postId}/#${getSlugByTitle(content)}`

          handleCopyToClipboard(url)
        }}
      >
        <Link
          className={clsxm(
            'group-hover:inline-block hidden group-hover:opacity-40',
          )}
          size={20}
        />
      </button>
    </a>
  )
}
