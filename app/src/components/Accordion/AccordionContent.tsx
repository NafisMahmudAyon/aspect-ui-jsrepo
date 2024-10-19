'use client'

import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAccordion } from './AccordionContext';

interface AccordionContentProps {
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, isOpen, className = "" }) => {
  const { contentClassName } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          className={`${className} ${contentClassName} overflow-hidden`}
        >
          <div className={`${isOpen ? "border-primary-950 dark:border-primary-100 bg-primary-100 text-primary-950 dark:bg-primary-950 dark:text-primary-100" : "border-primary-950 dark:border-primary-100"} p-4 border-t`}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
