type CardHeaderProps = {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = ''
}) => {
  return <div className={`${className} border-b p-4`}>{children}</div>
}
