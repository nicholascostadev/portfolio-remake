import { gql } from '@apollo/client'

export const QUERY = gql`
  query {
    posts {
      createdAt
      title
      publishedAt
      slug
      subtitle
      content {
        markdown
      }
    }
  }
`
