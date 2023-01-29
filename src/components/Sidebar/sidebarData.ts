import {
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
        label: 'Projects',
        href: '#projects',
        scroll: true,
        icon: Rows,
      },
      {
        label: 'About',
        href: '#about-me',
        scroll: true,
        icon: IdentificationBadge,
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
      },
      {
        label: 'GitHub',
        href: 'https://github.com/nicholascostadev',
        isExternal: true,
        icon: GithubLogo,
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/nicholascostadev',
        isExternal: true,
        icon: LinkedinLogo,
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
  }[]
}[]
