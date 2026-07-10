import clsx from 'clsx'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary'

interface PixelButtonBase {
  variant?: Variant
  href?: string
}

type Props = PixelButtonBase &
  (Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href' | 'variant'>
    | Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'variant'>)

export default function PixelButton({ variant = 'primary', className, href, children, ...rest }: Props) {
  const base = clsx(
    'font-heading text-sm md:text-base px-6 py-3 border-4 transition-colors duration-200',
    'uppercase cursor-pointer inline-block text-center',
    variant === 'primary' && 'border-primary text-primary hover:bg-primary hover:text-black',
    variant === 'secondary' && 'border-secondary text-secondary hover:bg-secondary hover:text-black',
    className,
  )

  if (href !== undefined) {
    return (
      <a href={href} className={base} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={base} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
