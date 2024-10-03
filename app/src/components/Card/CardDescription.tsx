interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className="",
}) => {
  return <p className={`${className} text-sm text-gray-600`}>{children}</p>;
};