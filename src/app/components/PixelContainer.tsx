import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function PixelContainer({ children, className, ...rest }: Props) {
  return (
    <div
      className={clsx('border-4 border-muted bg-black p-4 md:p-8', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
