import { Typography } from '@/app/src'
import type { FC, ReactNode } from 'react'

interface DocsContentLayoutProps {
  title: string
  description: string
  children: ReactNode
}

export const DocsContentLayout: FC<DocsContentLayoutProps> = ({ title, description, children }) => {
  return (
    <div>
      <div className="">
        <Typography variant='h1' className="mb-2 inline-block w-full text-h3 font-semibold">
          {title}
        </Typography>
        <p className="text-body-3 text-metal-500 dark:text-metal-300">{description}</p>
      </div>
      <div id="mainContent">{children}</div>
    </div>
  )
}
