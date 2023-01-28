import { ProjectCard } from '../Project'
import { projectsData } from './projectsData'

export const Projects = () => {
  return (
    <div>
      <h3 className="text-5xl pt-4 pb-8 dark:text-slate-100 text-slate-800">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubRepo={project.githubRepo}
            websiteUrl={project.website}
          />
        ))}
      </div>
    </div>
  )
}
