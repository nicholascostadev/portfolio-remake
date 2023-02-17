import { Post, SinglePostResponse } from '@/@types'

export const fetchPost = async (postSlug: string) => {
  const response = await fetch(
    `${process.env.DEVTO_URL}/nicholascostadev/${postSlug}`,
    {
      headers: {
        accept: 'application/vnd.forem.api-v1+json',
        'api-key': process.env.DEVTO_API_KEY ?? '',
      },
    },
  )
  const post = await response.json()
  return post as SinglePostResponse
}

export const fetchPosts = async () => {
  const response = await fetch(`${process.env.DEVTO_URL}/me`, {
    headers: {
      accept: 'application/vnd.forem.api-v1+json',
      'api-key': process.env.DEVTO_API_KEY ?? '',
    },
  })
  const posts = await response.json()
  return posts as Post[]
}
