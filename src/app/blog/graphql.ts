import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query GET_ALL_POSTS {
    posts(sort: "createdAt:DESC") {
      data {
        attributes {
          title
          content
          slug
          publishedAt
        }
      }
    }
  }
`

export type GQLResponse = {
  posts: {
    data: {
      attributes: {
        title: string
        content: string
        slug: string
        publishedAt: string
      }
    }[]
  }
}
