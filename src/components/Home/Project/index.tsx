'use client'

import Image from 'next/image'
import { File, GithubLogo, Globe } from 'phosphor-react'

type ProjectCardProps = {
  title: string
  description: string
  imageUrl: string
  githubRepo?: string
  websiteUrl?: string
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubRepo,
  websiteUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700">
      <div className="relative">
        <Image className="rounded-t-lg" src={imageUrl} alt="" fill />
      </div>
      <div className="p-5 flex flex-col h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-slate-100 text-slate-800">
          {title}
        </h5>
        <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
          {description}
        </p>
        <div className="w-full flex flex-col flex-1 h-full gap-2 justify-end pt-2">
          <p className="text-slate-600 dark:text-slate-500 border-b border-b-slate-100 dark:border-b-slate-700 inline-flex select-none pointer-events-none">
            See it on
          </p>
          <div className="flex gap-2">
            {githubRepo && (
              <a
                href={githubRepo}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-flex items-center p-2 text-sm font-medium text-center text-slate-800 dark:text-slate-100 bg-white rounded-lg hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="sr-only">See on Github</span>
                <GithubLogo size={20} />
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-flex items-center p-2 text-sm font-medium text-center text-slate-800 dark:text-slate-100 bg-white rounded-lg hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="sr-only">See on the live website</span>
                <Globe size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
