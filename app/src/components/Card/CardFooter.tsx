import { cn } from "../../utils/cn"

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = ''
}) => {
  return <div className={cn(className)}>{children}</div>
}
