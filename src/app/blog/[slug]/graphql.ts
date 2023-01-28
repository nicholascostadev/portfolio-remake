import { gql } from '@apollo/client'

export const GET_SPECIFIC_POST = gql`
  query GET_SPECIFIC_POST($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
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
