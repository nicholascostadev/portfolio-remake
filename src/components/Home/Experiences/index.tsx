import { ExperienceCard } from '../ExperienceCard'

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_EXPERIENCES, GQLResponse } from './graphql'

const client = new ApolloClient({
  uri: process.env.CMS_URL,
  cache: new InMemoryCache(),
  ssrMode: true,
})

export const Experiences = async () => {
  const { data } = await client.query<GQLResponse>({
    query: GET_ALL_EXPERIENCES,
  })

  const experiences = data.experiences

  return (
    <div id="experiences" className="py-20">
      <h2 className="text-4xl pb-8">Experiences</h2>

      <div className="flex flex-col">
        {experiences.reverse().map((experience, index) => {
          const isLastJob = index === experiences.length - 1
          return (
            <>
              <ExperienceCard
                title={experience.title}
                description={experience.description.text}
                startedAt={experience.startedAt}
                current={experience.endedAt === null}
                endedAt={experience.endedAt}
              />
              {!isLastJob && (
                <div className="flex justify-center items-center">
                  <div className="w-[2px] h-10 bg-slate-400" />
                </div>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}
