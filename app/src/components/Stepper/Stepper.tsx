'use client'
import React, { ReactElement, ReactNode, createContext, useContext, useState } from 'react';

interface StepperContextType {
  activeStep: number;
  setActiveStep: (step: number) => void;
  totalSteps: number;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

interface StepperProps {
  children: ReactElement<StepperItemProps>[];
  initialStep?: number;
}

interface StepperItemProps {
  icon: ReactNode;
  label: string;
  children?: ReactNode;
}

const Stepper: React.FC<StepperProps> = ({ children, initialStep = 0 }) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const contextValue: StepperContextType = {
    activeStep,
    setActiveStep,
    totalSteps: React.Children.count(children),
  };

  return (
    <StepperContext.Provider value={contextValue}>
      <div className="flex items-center">
        {React.Children.map(children, (child, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
                className={`flex-grow h-0.5 mx-2 ${index <= activeStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
              />
            )}
            {React.cloneElement(child, {
              index,
            })}
          </React.Fragment>
        ))}
      </div>
    </StepperContext.Provider>
  );
};

const StepperItem: React.FC<StepperItemProps & { index?: number }> = ({
  icon,
  label,
  children,
  index,
}) => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('StepperItem must be used within a Stepper');
  }

  const { activeStep, setActiveStep } = context;
  const completed = index !== undefined && index < activeStep;
  const active = index === activeStep;

  const getStateStyles = () => {
    if (completed) return 'bg-blue-500 text-white';
    if (active) return 'border-blue-500 text-blue-500';
    return 'bg-white border-gray-300 text-gray-500';
  };

  const handleClick = () => {
    if (index !== undefined) {
      setActiveStep(index);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${getStateStyles()} cursor-pointer`}
        onClick={handleClick}
      >
        {completed ? '✓' : icon}
      </div>
      <p className={`mt-2 text-sm ${active ? 'font-medium' : 'text-gray-500'}`}>{label}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

// Custom hook to access the Stepper context
const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepper must be used within a Stepper');
  }
  return context;
};

export { Stepper, StepperItem, useStepper };