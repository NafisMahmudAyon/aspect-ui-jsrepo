import React, { ReactElement, ReactNode } from 'react';
interface StepperContextType {
    activeStep: number;
    setActiveStep: (step: number) => void;
    totalSteps: number;
}
interface StepperProps {
    children: ReactElement<StepperItemProps>[];
    initialStep?: number;
}
interface StepperItemProps {
    icon: ReactNode;
    label: string;
    children?: ReactNode;
    index?: number;
}
declare const Stepper: React.FC<StepperProps>;
declare const StepperItem: React.FC<StepperItemProps & {
    index?: number;
}>;
declare const useStepper: () => StepperContextType;
export { Stepper, StepperItem, useStepper };
