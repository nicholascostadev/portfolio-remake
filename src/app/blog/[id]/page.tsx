import { Container } from '@/components/Container'
import { SinglePostResponse, Post } from '@/@types'
import { PostContainer } from './PostContainer'
import { PostCard } from '@/components/Blog/PostCard'

type BlogPostProps = {
  params: {
    id: string
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const [postResponse, allPostsResponse] = await Promise.all([
    fetch(`${process.env.DEVTO_URL}${params.id}`),
    fetch(`${process.env.DEVTO_URL}?username=nicholascostadev`),
  ])

  const post = (await postResponse.json()) as SinglePostResponse
  const posts = (await allPostsResponse.json()) as Post[]

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
    <Container className="pt-40 w-full 2xl:px-0 px-4">
      <PostContainer post={post} />
      <div className="w-[900px] max-w-full pr-0 xl:pr-64">
        <div className="h-px w-full bg-slate-100 dark:bg-slate-800 my-10" />
        <div className="flex flex-col gap-4 pb-10">
          <h2 className="text-2xl">
            😊 If you liked this post, you might also like:
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {posts &&
            posts.length > 0 &&
            posts.map((post, index) => {
              if (index > 2) return null

              return (
                <PostCard
                  key={post.slug}
                  content={post.description}
                  publishedAt={post.published_at}
                  slug={post.slug}
                  title={post.title}
                  postId={post.id}
                />
              )
            })}
        </div>
      </div>
    </Container>
  )
}
