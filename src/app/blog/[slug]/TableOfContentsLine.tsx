'use client'

import { clsxm } from '@/utils/clsxm'
import { handleCopyToClipboard } from '@/utils/copyToClipboard'
import { getSlugByTitle } from '@/utils/getSlugByTitle'
import { Link } from 'phosphor-react'

type TableOfContentsLineProps = {
  content: string
  isActive?: boolean
  postSlug: string
}

export const TableOfContentsLine = ({
  content,
  isActive,
  postSlug,
}: TableOfContentsLineProps) => {
  return (
    <a
      href={`#${getSlugByTitle(content)}`}
      className={clsxm(
        'group flex items-baseline justify-start gap-4',
        "text-slate-800 before:inline-block  before:h-1 before:w-1 before:bg-transparent before:content-[''] dark:text-slate-300",
        isActive && 'before:rounded-full before:bg-blue-600',
        'hover:underline',
      )}
    >
      {content.replace(/_/g, '').replace(/:/g, '')}

      <button
        onClick={() => {
          const url = `${
            process.env.NEXT_PUBLIC_URL
          }/blog/${postSlug}/#${getSlugByTitle(content)}`

          handleCopyToClipboard(url)
        }}
      >
        <Link
          className={clsxm(
            'hidden group-hover:inline-block group-hover:opacity-40',
          )}
          size={20}
        />
      </button>
    </a>
  )
}
