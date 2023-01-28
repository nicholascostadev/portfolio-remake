import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_POSTS, GQLResponse } from './graphql'
import { PostCard } from '@/components/Blog/PostCard'

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
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
