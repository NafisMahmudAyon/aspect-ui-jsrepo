import { cn } from "../../utils/cn"

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = ''
}) => {
  return (
    <h3 className={cn(
      "text-lg font-semibold text-primary-800 hover:text-primary-900 group-hover:text-primary-900 dark:text-primary-200 dark:hover:text-primary-300 dark:group-hover:text-primary-300",
      className
    )}>
      {children}
    </h3>
  )
}
