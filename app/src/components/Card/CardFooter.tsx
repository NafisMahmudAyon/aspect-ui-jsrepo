interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className="",
}) => {
  return <div className={`${className} p-4 border-t`}>{children}</div>;
};