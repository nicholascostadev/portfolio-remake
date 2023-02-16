import { fetchPosts } from '@/api'
import { PostCard } from '@/components/Blog/PostCard'

export default async function NotFound() {
  const posts = await fetchPosts()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-[900px] max-w-full pb-8">
        <h1 className="text-6xl text-red-400">404 🤔</h1>
      </div>

      <div className="flex w-[900px] max-w-full flex-col gap-1">
        <h2 className="text-3xl">
          Sorry, seems like the post you&apos;re looking for does not exist 🙁
        </h2>
        <p className="pb-2 text-lg">
          But don&apos;t worry, you can check out some of my other posts below!
        </p>

        <div className="mt-2 flex flex-col gap-4">
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
      </div>
    </div>
  )
}
