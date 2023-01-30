import { Container } from '@/components/Container'
import ReactMarkdown from 'react-markdown'
import rehypePrismPlus from 'rehype-prism-plus'
import { formatDate } from '@/utils/formatDate'
import { SinglePostResponse } from '@/@types'

type BlogPostProps = {
  params: {
    id: string
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const response = await fetch(`${process.env.DEVTO_URL}${params.id}`)

  const post = (await response.json()) as SinglePostResponse

  if (Object.keys(post).length === 0) {
    return (
      <Container className="pt-40 w-[900px]">
        <div className="flex justify-between gap-4 py-10">
          <h1 className="text-4xl">Post not found</h1>
        </div>
      </Container>
    )
  }

  return (
    <Container className="pt-40 w-[900px]">
      <div className="flex justify-between items-end gap-4 py-10">
        <h1 className="text-3xl md:text-4xl xl:text-5xl">{post.title}</h1>
        <span className="text-slate-800 dark:text-slate-400 inline-flex">
          {formatDate(post.published_at || String(new Date()))}
        </span>
      </div>
      <div>
        <ReactMarkdown
          rehypePlugins={[rehypePrismPlus]}
          className="markdown-content"
        >
          {post.body_markdown}
        </ReactMarkdown>
      </div>
    </Container>
  )
}
