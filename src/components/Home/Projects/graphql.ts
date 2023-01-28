import { GQLProjectResponse } from '@/@types'
import { gql } from '@apollo/client'

export type GQLResponse = {
  projects: {
    data: {
      attributes: GQLProjectResponse
    }[]
  }
}

export const GET_ALL_POSTS = gql`
  query {
    projects(sort: "createdAt:DESC") {
      data {
        attributes {
          title
          description
          githubUrl
          websiteUrl
          imageUrl {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
        }
      }
    }
  }
`
