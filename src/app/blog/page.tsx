import { ApolloClient, InMemoryCache } from '@apollo/client'
import Link from 'next/link'
import rehypePrismPlus from 'rehype-prism-plus'
import { GET_ALL_POSTS, GQLResponse } from './graphql'
import ReactMarkdown from 'react-markdown'
import { formatDate } from '@/utils/formatDate'

const client = new ApolloClient({
  uri: `${process.env.STRAPI_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
  ssrMode: true,
})

export default async function Blog() {
  const { data } = await client.query<GQLResponse>({
    query: GET_ALL_POSTS,
  })

  const posts = data.posts.data.map((post) => post?.attributes || [])

  return (
    <div className="w-full p-4">
      <div className="flex justify-center items-center h-[70vh]">
        <h1 className="text-5xl text-center">
          Here lay all of my thoughts,
          <br /> keep that in mind
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl">All posts</h2>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="rounded-md border bg-white dark:bg-slate-900 shadow border-gray-200 dark:border-slate-800 p-4"
            >
              <div className="flex justify-between items-end gap-4 py-2">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl">{post.title}</h3>
                </Link>
                <span className="text-slate-800 dark:text-slate-400 text-sm">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
              <ReactMarkdown
                rehypePlugins={[rehypePrismPlus]}
                className="markdown-content line-clamp-3"
              >
                {post.content}
              </ReactMarkdown>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-1 text-blue-500 dark:text-blue-400"
              >
                See more...
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
