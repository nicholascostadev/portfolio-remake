'use client'

import ReactMarkdown from 'react-markdown'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import { formatDate } from '@/utils/formatDate'
import { SinglePostResponse } from '@/@types'
import { useEffect, useState } from 'react'
import { getSlugByTitle } from '../../../utils/getSlugByTitle'
import { getHeadingsFromMarkdown } from '../../../utils/getHeadingsFromMarkdown'
import { TableOfContentsLine } from './TableOfContentsLine'
import { handleCopyToClipboard } from '../../../utils/copyToClipboard'
import { Link } from 'phosphor-react'
import { HeadingProps } from 'react-markdown/lib/ast-to-react'

type PostContainerProps = {
  post: SinglePostResponse
}

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

const generateMappedHeadings = (postId: number) =>
  headings.reduce((acc, heading) => {
    const Heading = heading

    return {
      ...acc,
      [heading]: (props: HeadingProps) => (
        <a
          href={`#${props.id}`}
          className="group !flex !items-baseline !gap-2 !text-slate-800 dark:!text-white"
        >
          <Heading {...props} />

          <button
            onClick={() =>
              handleCopyToClipboard(
                `${process.env.NEXT_PUBLIC_URL}/blog/${postId}/#${props.id}`,
              )
            }
          >
            <Link
              size={24}
              className="hidden group-hover:inline-block group-hover:opacity-40"
            />
          </button>
        </a>
      ),
    }
  }, {} as any)

export const PostContainer = ({ post }: PostContainerProps) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const headings = getHeadingsFromMarkdown(post.body_markdown)
  const itemIds = headings.map((h) => getSlugByTitle(h.content))

  const paddingBasedOnHeading = (heading: string) => {
    return String(Number(heading[1]) * 16) + 'px'
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` },
    )

    itemIds.forEach((id) => {
      if (document.getElementById(id))
        observer.observe(document.getElementById(id)!)
    })
    return () => {
      itemIds.forEach((id) => {
        if (document.getElementById(id))
          observer.unobserve(document.getElementById(id)!)
      })
    }
  }, [itemIds])

  return (
    <>
      <div className="right-0 mx-auto w-full max-w-full xl:fixed xl:mx-0 xl:w-[calc(100%-1020px)] 2xl:w-[calc(100%-1200px)]">
        <div className="mr-auto flex max-w-full flex-col gap-4 rounded-lg border border-slate-400/20 bg-slate-100/20 dark:border-slate-400/20 dark:bg-slate-800/20 2xl:w-96">
          <h2 className="px-6 pt-4 text-2xl">Table of Contents</h2>

          <div className="h-px w-full bg-slate-400/20" />
          <ul className="-ml-[3.2rem] flex flex-col gap-2 pl-6 pb-4">
            {headings.map(({ heading, content }) => (
              <li
                key={content}
                style={{
                  paddingLeft: paddingBasedOnHeading(heading),
                }}
              >
                <TableOfContentsLine
                  content={content}
                  isActive={activeId === getSlugByTitle(content)}
                  postId={post.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-[900px] max-w-full">
        <div className="flex flex-col gap-4 py-10">
          <h1 className="text-3xl md:text-4xl xl:text-5xl">{post.title} </h1>
          <span className="inline-flex text-base text-slate-800 dark:text-slate-400">
            Posted on {formatDate(post.published_at || String(new Date()))}
          </span>
        </div>
        <div className="pr-0 xl:pr-64">
          <ReactMarkdown
            rehypePlugins={[rehypePrismPlus, rehypeSlug]}
            className="markdown-content"
            components={{
              a: (props) => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
              ...generateMappedHeadings(post.id),
            }}
          >
            {post.body_markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}
