import { gql } from '@apollo/client'
import { Project } from './projectsData'

export type GQLResponse = {
  projects: {
    data: {
      attributes: {
        title: string
        description: string
        imageUrl: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        githubUrl?: string | undefined
        websiteUrl?: string | undefined
      }
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
