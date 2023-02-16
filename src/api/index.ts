import { Post, SinglePostResponse } from '@/@types'

export const fetchPost = async (postSlug: string) => {
  const response = await fetch(
    `${process.env.DEVTO_URL}/nicholascostadev/${postSlug}`,
  )
  const post = await response.json()
  return post as SinglePostResponse
}

export const fetchPosts = async () => {
  const response = await fetch(
    `${process.env.DEVTO_URL}/latest?username=nicholascostadev`,
  )
  const posts = await response.json()
  return posts as Post[]
}
