import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-gray-400 rounded-lg shadow-md overflow-hidden`}
    >
      {children}
    </div>
  );
};

