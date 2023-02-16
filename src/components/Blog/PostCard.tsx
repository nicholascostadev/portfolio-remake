import { formatDate } from '@/utils/formatDate'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypePrismPlus from 'rehype-prism-plus'

type PostCardProps = {
  title: string
  slug: string
  publishedAt: string
  content: string
  postId: number
}

export const PostCard = ({
  title,
  publishedAt,
  content,
  postId,
  slug,
}: PostCardProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-5 shadow dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-end justify-between gap-4 py-2">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl">{title}</h3>
        </Link>
        <span className="text-sm text-slate-800 dark:text-slate-400">
          {formatDate(publishedAt || String(new Date()))}
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
