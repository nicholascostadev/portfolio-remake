'use client'

import Image from 'next/image'
import { GithubLogo, Globe } from 'phosphor-react'

type ProjectCardProps = {
  title: string
  description: string
  imageUrl: string
  githubRepo?: string
  websiteUrl?: string
  techs: {
    name: string
    link: string
  }[]
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubRepo,
  websiteUrl,
  techs,
}: ProjectCardProps) => {
  return (
    <div className="flex max-w-md flex-col rounded-lg border border-gray-200 bg-white shadow dark:border-slate-700 dark:bg-slate-800">
      <div className="relative h-64 max-h-96 w-full">
        <Image
          className="max-h-96 w-full rounded-t-lg object-contain"
          src={imageUrl}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="pb-1 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          {title}
        </h4>
        <div className="flex flex-wrap gap-2 pb-2 text-slate-500 dark:text-slate-300">
          {techs.map((tech) => {
            const Element = tech.link !== '' ? 'a' : 'span'

            return (
              <Element
                href={tech.link}
                key={tech.name}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-slate-800 dark:hover:text-slate-100"
              >
                {tech.name}
              </Element>
            )
          })}
        </div>
        <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
          {description}
        </p>
        <div className="flex w-full flex-1 flex-col justify-end gap-2 pt-2">
          <p className="pointer-events-none inline-flex select-none border-b border-b-slate-100 text-slate-600 dark:border-b-slate-700 dark:text-slate-400">
            See it on
          </p>
          <div className="flex gap-2">
            {githubRepo && (
              <a
                href={githubRepo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-slate-800 transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
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
                className="inline-flex cursor-pointer items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-slate-800 transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
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
