import React from "react";

export interface SlideProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  isActive?: boolean; // for later animations or visibility logic
}

const Slide: React.FC<SlideProps> = ({ title, description, children, isActive = true }) => {
  return (
    <div
      className={`
        transition-all duration-500 
        ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"} 
      `}
    >
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      {description && <p className="text-sm opacity-80 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Slide;
