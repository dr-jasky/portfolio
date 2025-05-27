import React from 'react';

interface SectionProps {
  title: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ title, id, children, className = '', titleClassName = '', subtitle }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold text-light-primary mb-2 relative inline-block ${titleClassName}`}>
            {title}
            <span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-neon-blue rounded-full origin-center scale-x-0 animate-scaleIn"
              // Inline style removed to rely on Tailwind class 'animate-scaleIn' which should trigger global keyframes
            ></span>
          </h2>
          {subtitle && <p className="text-md sm:text-lg text-light-secondary mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};