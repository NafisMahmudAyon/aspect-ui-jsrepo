type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className="",
}) => {
  return <div className={`${className} p-4 border-b`}>{children}</div>;
};