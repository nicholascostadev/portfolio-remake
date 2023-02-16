import { Container } from '@/components/Container'
import { PostContainer } from './PostContainer'
import { notFound } from 'next/navigation'
import { fetchPost, fetchPosts } from '@/api'

type BlogPostProps = {
  params: {
    id: string
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  try {
    const [post, allPosts] = await Promise.all([
      fetchPost(params.id),
      fetchPosts(),
    ])

    if (post.status && post.status === 404) {
      throw new Error('post not found')
    }

    return (
      <Container className="w-full pt-40 pl-4">
        <PostContainer post={post} allPosts={allPosts} />
      </Container>
    )
  } catch (err) {
    notFound()
  }
}
