import {
  GithubLogo,
  IconProps,
  IdentificationBadge,
  LinkedinLogo,
  Rows,
  Scroll,
  TwitterLogo,
} from 'phosphor-react'

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

export const sidebarContent: SidebarContent = [
  {
    title: 'Home page',
    links: [
      {
        label: 'About',
        href: '#about',
        scroll: true,
        icon: IdentificationBadge,
      },
      {
        label: 'Projects',
        href: '#projects',
        scroll: true,
        icon: Rows,
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
        disabled: true,
        disabledReason: 'Coming soon!',
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
