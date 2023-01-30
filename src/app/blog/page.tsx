import { PostCard } from '@/components/Blog/PostCard'
import { Post } from '@/@types'

export default async function Blog() {
  const response = await fetch(
    `${process.env.DEVTO_URL}?username=nicholascostadev`,
  )

  const data = (await response.json()) as Post[]

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
          {data.map((post) => (
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
