import { ExperienceCard } from '../ExperienceCard'

export const Experiences = () => {
  const numOfExperiences = 4
  return (
    <div id="experiences">
      <h3 className="text-4xl pb-8">Experiences</h3>

      <div className="flex flex-col">
        {Array.from({ length: numOfExperiences }).map((_, index) => {
          if (index !== numOfExperiences - 1) {
            return (
              <>
                <ExperienceCard />
                <div className="flex justify-center items-center">
                  <div className="w-[2px] h-10 bg-slate-400" />
                </div>
              </>
            )
          }

          return <ExperienceCard key={index} />
        })}
      </div>
    </div>
  )
}
