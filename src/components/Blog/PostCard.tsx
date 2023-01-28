import { formatDate } from '@/utils/formatDate'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypePrismPlus from 'rehype-prism-plus'

type PostCardProps = {
  title: string
  slug: string
  publishedAt: string
  content: string
}

export const PostCard = ({
  title,
  slug,
  publishedAt,
  content,
}: PostCardProps) => {
  return (
    <div
      key={slug}
      className="rounded-md border bg-white dark:bg-slate-900 shadow border-gray-200 dark:border-slate-800 p-4"
    >
      <div className="flex justify-between items-end gap-4 py-2">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl">{title}</h3>
        </Link>
        <span className="text-slate-800 dark:text-slate-400 text-sm">
          {formatDate(publishedAt)}
        </span>
      </div>
      <ReactMarkdown
        rehypePlugins={[rehypePrismPlus]}
        className="markdown-content line-clamp-3"
      >
        {content}
      </ReactMarkdown>
      <Link
        href={`/blog/${slug}`}
        className="mt-1 text-blue-500 dark:text-blue-400"
      >
        See more...
      </Link>
    </div>
  )
}
