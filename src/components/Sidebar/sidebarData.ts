import {
  Briefcase,
  GithubLogo,
  IconProps,
  IdentificationBadge,
  LinkedinLogo,
  Rows,
  Scroll,
  TwitterLogo,
} from 'phosphor-react'

export const sidebarContent: SidebarContent = [
  {
    title: 'Home page',
    links: [
      {
        label: 'About',
        href: '#about-me',
        scroll: true,
        icon: IdentificationBadge,
        name: 'Go to About section',
      },
      {
        label: 'Work Experience',
        href: '#experiences',
        scroll: true,
        icon: Briefcase,
        name: 'Go to Work Experience section',
      },
      {
        label: 'Projects',
        href: '#projects',
        scroll: true,
        icon: Rows,
        name: 'Go to Projects section',
      },
    ],
  },
  {
    title: 'Blog',
    links: [
      {
        label: 'Main Blog',
        href: '/blog',
        icon: Scroll,
        name: 'Go to Blog page',
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/nicholascosta04',
        isExternal: true,
        icon: TwitterLogo,
        name: 'Go to my Twitter profile',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/nicholascostadev',
        isExternal: true,
        icon: GithubLogo,
        name: 'Go to my GitHub profile',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/nicholascostadev',
        isExternal: true,
        icon: LinkedinLogo,
        name: 'Go to my LinkedIn profile',
      },
    ],
  },
]

type SidebarContent = {
  title: string
  links: {
    label: string
    href: string
    isExternal?: boolean
    scroll?: boolean
    icon?: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >
    disabled?: boolean
    disabledReason?: string
    name: string
  }[]
}[]
