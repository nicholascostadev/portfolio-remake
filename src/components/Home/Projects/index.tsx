import { ProjectCard } from '../ProjectCard'
import { GET_ALL_POSTS, GQLResponse } from './graphql'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: `${process.env.STRAPI_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
  ssrMode: true,
})

export const Projects = async () => {
  const { data } = await client.query<GQLResponse>({
    query: GET_ALL_POSTS,
  })

  const projects = data?.projects?.data
    .map((proj) => proj.attributes)
    .map((proj) => ({
      ...proj,
      imageUrl: proj.imageUrl.data.attributes.url,
    }))

  return (
    <div id="projects">
      <h3 className="text-5xl pt-4 pb-8 dark:text-slate-100 text-slate-800">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects &&
          projects.map((proj) => (
            <ProjectCard
              key={proj?.title}
              title={proj?.title}
              description={proj?.description}
              imageUrl={`${process.env.STRAPI_BACKEND_URL}${proj?.imageUrl}`}
              githubRepo={proj?.githubUrl}
              websiteUrl={proj?.websiteUrl}
            />
          ))}
      </div>
    </div>
  )
}
