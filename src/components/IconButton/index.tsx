'use client'

import { VariantProps, cva } from 'class-variance-authority'
import classNames from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

const button = cva(
  [
    'border',
    'rounded-md',
    'flex',
    'justify-center',
    'items-center',
    'transition-all',
  ],
  {
    variants: {
      color: {
        primary:
          'hover:bg-slate-100 border-slate-200 dark:hover:bg-slate-700 dark:border-slate-600',
      },
      size: {
        small: 'p-2',
        medium: 'p-3',
        large: 'p-4',
      },
    },
    defaultVariants: {
      size: 'medium',
      color: 'primary',
    },
  },
)

type IconButtonProps = VariantProps<typeof button> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const IconButton = ({ size, className, ...props }: IconButtonProps) => {
  return (
    <button className={classNames(button({ size }), className)} {...props}>
      {props.children}
    </button>
  )
}
