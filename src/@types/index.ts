export type Project = {
  title: string
  description: string
  imageUrl: string
  githubUrl?: string
  websiteUrl?: string
}

export type Post = {
  title: string
  content: string
  slug: string
  publishedAt: string
}

export type GQLProjectResponse = {
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
  techs: {
    data: {
      name: string
      link: string
    }[]
  }
}
