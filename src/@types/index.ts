export type Project = {
  title: string
  description: string
  imageUrl: string
  githubUrl?: string
  websiteUrl?: string
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

export type Post = {
  title: string
  description: string
  published_at: string
  slug: string
  id: number
  user: {
    name: string
    profile_image: string
  }
}

export interface SinglePostResponse extends Post {
  body_markdown: string
  status?: number
}

export type ProjectsType = {
  description: string
  publishedAt: string
  title: string
  githubRepo: string
  websiteUrl: string
  imageUrl: {
    url: string
  }
  techs: {
    data: {
      link: string
      name: string
    }[]
  }
}
