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
  const [postResponse, allPostsResponse] = await Promise.allSettled([
    fetch(`${process.env.DEVTO_URL}/${params.id}`),
    fetch(`${process.env.DEVTO_URL}?username=nicholascostadev`),
  ])

  if (
    postResponse.status === 'rejected' ||
    allPostsResponse.status === 'rejected'
  ) {
    return (
      <Container className="w-[900px] pt-40">
        <div className="flex justify-between gap-4 py-10">
          <h1 className="text-4xl">Post not found</h1>
        </div>
      </Container>
    )
  }

  const post = (await postResponse.value.json()) as SinglePostResponse

  if (post.status && post.status === 404) {
    return (
      <Container className="w-[900px] pt-40">
        <div className="flex justify-between gap-4 py-10">
          <h1 className="text-4xl">Post not found</h1>
        </div>
      </Container>
    )
  }

  return (
    <div>
      <PostContainer post={post} />
    </div>
  )
}
