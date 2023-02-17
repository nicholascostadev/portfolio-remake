import { gql } from '@apollo/client'

export const GET_ALL_EXPERIENCES = gql`
  query {
    experiences {
      title
      startedAt
      endedAt
      description {
        html
        text
      }
    }
  }
`

export type Experience = {
  title: string
  startedAt: string
  endedAt: string
  description: {
    html: string
    text: string
  }
}

export type GQLResponse = {
  experiences: Experience[]
}
