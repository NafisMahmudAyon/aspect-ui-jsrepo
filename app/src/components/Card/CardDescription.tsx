import { cn } from "../../utils/cn"

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = ''
}) => {
  return <p className={cn("text-sm text-secondary-800 dark:text-secondary-300", className,)
}>{children}</p>
}
