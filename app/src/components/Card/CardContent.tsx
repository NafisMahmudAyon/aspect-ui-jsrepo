interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className="",
}) => {
  return <div className={`${className} p-4`}>{children}</div>;
};