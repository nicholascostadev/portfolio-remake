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
  try {
    const [postResponse, allPostsResponse] = await Promise.all([
      fetch(`${process.env.DEVTO_URL}/${params.id}`),
      fetch(`${process.env.DEVTO_URL}?username=nicholascostadev`),
    ])

    const post = (await postResponse.json()) as SinglePostResponse
    const allPosts = (await allPostsResponse.json()) as Post[]

    if (post.status && post.status === 404) {
      return (
        <Container className="w-[720px] pt-40">
          <div className="flex justify-between gap-4 py-10">
            <h1 className="text-4xl">Post not found</h1>
          </div>
        </Container>
      )
    }

    return (
      <Container className="w-full pt-40 pl-4">
        <PostContainer post={post} allPosts={allPosts} />
      </Container>
    )
  } catch (err) {
    return (
      <Container className="w-[720px] pt-40">
        <div className="flex justify-between gap-4 py-10">
          <h1 className="text-4xl">Post not found</h1>
        </div>
      </Container>
    )
  }
}
