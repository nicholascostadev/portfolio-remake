import { Container } from '@/components/Container'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_SPECIFIC_POST, GQLResponse } from './graphql'
import ReactMarkdown from 'react-markdown'
import rehypePrismPlus from 'rehype-prism-plus'
import { formatDate } from '@/utils/formatDate'

const client = new ApolloClient({
  uri: `${process.env.STRAPI_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
  ssrMode: true,
})

type BlogPostProps = {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { data } = await client.query<GQLResponse>({
    query: GET_SPECIFIC_POST,
    variables: {
      slug: params.slug,
    },
  })

  const post = data.posts.data[0]?.attributes || {}

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
        <span className="text-slate-800 dark:text-slate-400">
          {formatDate(post.publishedAt)}
        </span>
      </div>
      <div>
        <ReactMarkdown
          rehypePlugins={[rehypePrismPlus]}
          className="markdown-content"
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </Container>
  )
}
