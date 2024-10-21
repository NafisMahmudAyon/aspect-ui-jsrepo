import { cn } from "../../utils/cn"

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = ''
}) => {
  return <div className={cn('p-4', className)}>{children}</div>
}
