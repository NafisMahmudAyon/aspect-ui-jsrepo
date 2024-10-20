interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = ''
}) => {
  return (
    <h3 className={`${className} text-lg font-semibold text-gray-800`}>
      {children}
    </h3>
  )
}
