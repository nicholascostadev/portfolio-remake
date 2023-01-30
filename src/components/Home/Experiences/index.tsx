import { ExperienceCard } from '../ExperienceCard'
import { experiences } from './experiencesData'

export const Experiences = () => {
  return (
    <div id="experiences" className="py-20">
      <h3 className="text-4xl pb-8">Experiences</h3>

      <div className="flex flex-col">
        {experiences.reverse().map((experience, index) => {
          const isLastJob = index === experiences.length - 1
          return (
            <>
              <ExperienceCard
                title={experience.title}
                description={experience.description}
                startedAt={experience.startedAt}
                current={experience.current}
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
