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
  const desc = description.split('\n').map((str) => str.replaceAll('\\n', ''))

  return (
    <div className="flex flex-col gap-2 rounded-md border border-slate-100 bg-white p-5 shadow dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between">
        <h3 className="text-xl">
          {title}{' '}
          {current && (
            <span className="text-sm text-slate-700 dark:text-slate-400">
              (Current role)
            </span>
          )}
        </h3>
        <div>
          <span className="text-sm text-slate-700 dark:text-slate-400">
            started at {formatDate(startedAt || String(new Date()))}
          </span>
          {endedAt && (
            <span className="text-sm text-slate-700 dark:text-slate-400">
              {' '}
              until {formatDate(endedAt || String(new Date()))}
            </span>
          )}
        </div>
      </div>
      <div className="text-slate-700 dark:text-slate-400">
        {desc.map((str) => (
          <p key={str}>{str}</p>
        ))}
      </div>
    </div>
  )
}
