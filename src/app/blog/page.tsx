import { PostCard } from '@/components/Blog/PostCard'
import { fetchPosts } from '@/api'

export default async function Blog() {
  const posts = await fetchPosts()

  return (
    <div className="mx-auto w-[1400px] max-w-full p-4">
      <div className="flex h-[70vh] items-center justify-center">
        <h1 className="text-center text-5xl">
          Here lay all of my thoughts,
          <br /> keep that in mind
        </h1>
      </div>
      <div className="flex flex-col">
        <h2 className="py-4 text-3xl">All posts</h2>

        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                content={post.description}
                publishedAt={post.published_at}
                slug={post.slug}
                title={post.title}
                postId={post.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
