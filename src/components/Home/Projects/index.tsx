import { ProjectCard } from '../ProjectCard'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_PROJECTS, GQLResponse } from './graphql'

const client = new ApolloClient({
  uri: process.env.CMS_URL,
  cache: new InMemoryCache(),
  ssrMode: true,
})

export const Projects = async () => {
  const { data } = await client.query<GQLResponse>({
    query: GET_ALL_PROJECTS,
  })

  const projects = data.projects

  return (
    <div id="projects" className="pt-20 md:pt-0">
      <h3 className="text-4xl pt-4 pb-8 dark:text-slate-100 text-slate-800">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {projects &&
          projects.map((proj) => (
            <ProjectCard
              key={proj?.title}
              title={proj?.title}
              description={proj?.description}
              imageUrl={proj.imageUrl.url}
              githubRepo={proj.githubRepo}
              websiteUrl={proj?.websiteUrl}
              techs={proj.techs.data}
            />
          ))}
      </div>
    </div>
  )
}
