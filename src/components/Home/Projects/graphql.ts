import { GQLProjectResponse, ProjectsType } from '@/@types'
import { gql } from '@apollo/client'

export type GQLResponse = {
  projects: ProjectsType[]
}

export const GET_ALL_PROJECTS = gql`
  query {
    projects(orderBy: publishedAt_DESC) {
      description
      publishedAt
      techs
      title
      websiteUrl
      githubRepo
      imageUrl {
        url
      }
    }
  }
`
