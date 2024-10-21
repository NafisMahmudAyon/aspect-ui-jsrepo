import { cn } from "../../utils/cn"

type CardHeaderProps = {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = ''
}) => {
  return <div className={cn(className)}>{children}</div>
}
