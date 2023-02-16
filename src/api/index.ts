import { Post, SinglePostResponse } from '@/@types'

export const fetchPost = async (postSlug: string) => {
  const response = await fetch(
    `${process.env.DEVTO_URL}/nicholascostadev/${postSlug}`,
  )
  const post = (await response.json()) as SinglePostResponse
  return post
}

export const fetchPosts = async () => {
  const response = await fetch(
    `${process.env.DEVTO_URL}/latest?username=nicholascostadev`,
  )
  const posts = (await response.json()) as Post[]
  return posts
}
