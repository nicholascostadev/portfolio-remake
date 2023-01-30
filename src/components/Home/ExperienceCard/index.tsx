import { formatDate } from '../../../utils/formatDate'
type ExperienceCardProps = {
  title: string
  current?: boolean
  description: string
  startedAt: string
  endedAt?: string
}

export const ExperienceCard = ({
  title,
  description,
  startedAt,
  current,
  endedAt,
}: ExperienceCardProps) => {
  return (
    <div className="border flex flex-col gap-2 bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 p-4 rounded-md shadow">
      <div className="flex justify-between items-start">
        <h4 className="text-xl">
          {title}{' '}
          {current && (
            <span className="text-slate-700 dark:text-slate-400 text-sm">
              (Current role)
            </span>
          )}
        </h4>
        <div>
          <span className="text-slate-700 dark:text-slate-400 text-sm">
            started at {formatDate(startedAt || String(new Date()))}
          </span>
          {endedAt && (
            <span className="text-slate-700 dark:text-slate-400 text-sm">
              {' '}
              until {formatDate(endedAt || String(new Date()))}
            </span>
          )}
        </div>
      </div>
      <p className="text-slate-700 dark:text-slate-400">{description}</p>
    </div>
  )
}
